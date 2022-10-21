import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProductTypes, getProductTypeById } from '../../api/productTypeApi';

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

export const getById = createAsyncThunk(
  'productType/getProductTypeById',
  async(id) => {
    const response = await getProductTypeById(id)
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
        state.productTypes.status = { error: action.error }
      })
      // status fetch productType by id
      .addCase(getById.pending, (state) => {
        state.productTypes.status = { loading: true }
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.productTypes.selected = action.payload
        state.productTypes.status = { succeded: true }
      })
      .addCase(getById.rejected, (state, action) => {
        state.productTypes.status = { error: action.error }
      })
  }
})

export default productTypeSlice.reducer