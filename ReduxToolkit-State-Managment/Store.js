import { configureStore } from '@reduxjs/toolkit'
import CartReducerSlice from './reducers/CartReducerSlice'
import ProductReducerSlice from './reducers/ProductReducerSlice'
import SearchReducerSlice from './reducers/SearchReducerSlice'
import CategoryReducerSlice from './reducers/CategoryReducerSlice'
import AllCategoriesReducerSlice from './reducers/AllCategoriesReducerSlice'
import ReviewReducerSlice from './reducers/ReviewReducerSlice'
import BrandsReducerslice from './reducers/BrandsReducerslice'

const Store = configureStore({
  reducer: {
    review: ReviewReducerSlice,
    cart: CartReducerSlice,
    search: SearchReducerSlice,
    product: ProductReducerSlice,
    category: CategoryReducerSlice,
    allCategories: AllCategoriesReducerSlice,
    brands: BrandsReducerslice,
  },
})

export default Store
