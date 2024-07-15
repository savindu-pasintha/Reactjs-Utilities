import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  reviews: {},
}

export const fetchReviewResult = createAsyncThunk(
  'review/fetchReviewResult',
  async () => {
    const response = await axios.get(process.env.REACT_APP_GET_REVIEW_URL)
    console.log('reviews:', response.data)
    return response.data
  },
)

const ReviewReducerSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReviewResultAction: (state, action) => {
      state.reviews = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewResult.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchReviewResult.fulfilled, (state, action) => {
      state.loading = false
      state.reviews = action.payload
      state.error = ''
    })
    builder.addCase(fetchReviewResult.rejected, (state, action) => {
      state.loading = false
      state.reviews = {}
      state.error = action.error.message
    })
  },
})

export const { setReviewResultAction } = ReviewReducerSlice.actions
export default ReviewReducerSlice.reducer
