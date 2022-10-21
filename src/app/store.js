import { configureStore } from '@reduxjs/toolkit';
import productTypeReducer from '../features/productType/productTypeSlice'

export const store = configureStore({
  reducer: {
    productType: productTypeReducer,
  }
})