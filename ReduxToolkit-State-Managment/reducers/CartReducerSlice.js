import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  carts: [],
  cartNoItems: 0,
}

export const fetchCarts = createAsyncThunk('cart/fetchCarts', async () => {
  const response = await axios.get(process.env.REACT_APP_CART)
  console.log('fetchCarts:', response.data)
  return response.data
})

const CartReducerSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartNoItemsAction: (state, action) => {
      state.cartNoItems = action.payload
    },
    setCartItemsAction: (state, action) => {
      state.carts = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.loading = false
      state.carts = action.payload
      state.error = ''
    })
    builder.addCase(fetchCarts.rejected, (state, action) => {
      state.loading = false
      state.carts = []
      state.error = action.error.message
    })
  },
})

export const {
  setCartNoItemsAction,
  setCartItemsAction,
} = CartReducerSlice.actions
export default CartReducerSlice.reducer
