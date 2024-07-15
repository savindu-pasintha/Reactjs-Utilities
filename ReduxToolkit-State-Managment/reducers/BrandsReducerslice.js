import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  brands: {},
}

export const fetchBrandsResult = createAsyncThunk(
  'category/fetchBrandsResult',
  async () => {
    const response = await axios.get(process.env.REACT_APP_GET_ALL_BRANDS_URL)
    return response
  },
)

const BrandsReducerSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrandsAction: (state, action) => {
      state.brands = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrandsResult.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchBrandsResult.fulfilled, (state, action) => {
      state.loading = false
      state.brands = action.payload
      state.error = ''
    })
    builder.addCase(fetchBrandsResult.rejected, (state, action) => {
      state.loading = false
      state.brands = {}
      state.error = action.error.message
    })
  },
})

export const {
  setBrandsAction,
  setAllSubBrandsAction,
} = BrandsReducerSlice.actions
export default BrandsReducerSlice.reducer
