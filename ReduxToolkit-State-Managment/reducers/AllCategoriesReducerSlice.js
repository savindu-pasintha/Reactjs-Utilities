import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  allCategories: {},
}

export const fetchAllCategoriesResult = createAsyncThunk(
  'category/fetchAllCategoriesResult',
  async () => {
    const response = await axios.get(process.env.REACT_APP_GET_ALL_CATEGORY_URL)
    return response.data
  },
)

const AllCategoryReducerSlice = createSlice({
  name: 'allCategories',
  initialState,
  reducers: {
    setAllCategoriesAction: (state, action) => {
      state.allCategories = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategoriesResult.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllCategoriesResult.fulfilled, (state, action) => {
      state.loading = false
      state.allCategories = action.payload
      state.error = ''
    })
    builder.addCase(fetchAllCategoriesResult.rejected, (state, action) => {
      state.loading = false
      state.allCategories = {}
      state.error = action.error.message
    })
  },
})

export const {
  setAllCategoriesAction,
  setAllSubCategoriesAction,
} = AllCategoryReducerSlice.actions
export default AllCategoryReducerSlice.reducer
