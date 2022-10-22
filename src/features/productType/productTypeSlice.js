import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { editProductTypeById, getAllProductTypes, getProductTypeById } from '../../api/productTypeApi';

const initialForm = {
  mode: { creation: true },
  fields: {
    name: 'nombre',
    description: 'descripción',
    imageUrl: 'image-url'
  },
}

const initialState = {
  list: [],
  status: { idle: true },
  selected: {},
  form: initialForm
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

export const editProductType = createAsyncThunk(
  'productType/editProductType',
  async(productType) => {
    const response = await editProductTypeById(productType.id, productType)
    return response.data.data
  }
)

const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      state.form.fields[action.payload.field] = action.payload.value
    },
    setEditionMode: (state) => {
      state.form.mode = { edition: true }
    },
    setCreationMode: (state) => {
      state.form.mode = { creation: true }
    },
    setResetForm: (state) => {
      state.form = initialForm
    },
  },
  extraReducers: (builder) => {
    builder
      // status fetch all productTypes
      .addCase(getAll.pending, (state) => {
        state.status = { loading: true }
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = { succeded: true }
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = { error: action.error }
      })
      // status fetch productType by id
      .addCase(getById.pending, (state) => {
        state.status = { loading: true }
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.selected = action.payload
        state.form.fields = action.payload
        state.status = { succeded: true }
      })
      .addCase(getById.rejected, (state, action) => {
        state.status = { error: action.error }
      })
      // status fetch edit productType
      .addCase(editProductType.pending, (state) => {
        state.status = { loading: true }
      })
      .addCase(editProductType.fulfilled, (state) => {
        state.status = { idle: true }
      })
      .addCase(editProductType.rejected, (state, action) => {
        state.status = { error: action.error }
      })
  }
})

export const { setFormField, setEditionMode, setCreationMode, setResetForm } = productTypeSlice.actions

export default productTypeSlice.reducer