import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  product: {},
}

const ProductReducerSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      state.product = action.payload
    },
  },
})

export const { setProductAction } = ProductReducerSlice.actions
export default ProductReducerSlice.reducer
