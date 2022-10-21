import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProductTypes } from '../../api/productTypeApi';

const initialState = {
  productTypes: {
    list: [],
    status: { idle: true },
    selected: {}
  }
}

export const getAll = createAsyncThunk(
  'productType/getAllProductTypes',
  async() => {
    const response = await getAllProductTypes()
    return response.data.data
  }
)

const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // status fetch all productTypes
      .addCase(getAll.pending, (state) => {
        state.productTypes.status = { loading: true }
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.productTypes.list = action.payload
        state.productTypes.status = { succeded: true }
      })
      .addCase(getAll.rejected, (state, action) => {
        console.log(action.error)
        state.productTypes.status = { error: action.error }
      })
  }
})

export default productTypeSlice.reducer