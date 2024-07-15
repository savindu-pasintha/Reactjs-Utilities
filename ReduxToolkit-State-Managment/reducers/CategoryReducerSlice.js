import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  categories: {},
  allSubCategoriesData: {},
}

export const fetchCategoriesResult = createAsyncThunk(
  'category/fetchCategoriesResult',
  async () => {
    console.log('category_url', process.env.REACT_APP_GET_CATEGORIES_URL)
    const response = await axios.get(process.env.REACT_APP_GET_CATEGORIES_URL)
    console.log('categoryfetchCategoriesResult: ', response)
    return response.data
  },
)

const CategoryReducerSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoriesAction: (state, action) => {
      state.categories = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesResult.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCategoriesResult.fulfilled, (state, action) => {
      state.loading = false
      state.categories = action.payload
      state.error = ''
    })
    builder.addCase(fetchCategoriesResult.rejected, (state, action) => {
      state.loading = false
      state.categories = {}
      state.error = action.error.message
    })
  },
})

export const {
  setCategoriesAction,
  setAllSubCategoriesAction,
} = CategoryReducerSlice.actions
export default CategoryReducerSlice.reducer
