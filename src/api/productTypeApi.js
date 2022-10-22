import { getRequest, postRequest, putRequest, deleteRequest } from './apiHandler'

export function getAllProductTypes (filters) {
  return getRequest(`products/types?${filters}`)
}

export function getProductTypeById (id) {
  return getRequest(`products/types/${id}`)
}

export function createProductType (productType) {
  return postRequest('products/types', productType)
}

export function editProductTypeById (id, productType) {
  return putRequest(`products/types/${id}`, productType)
}

export function deleteProductTypeById (id) {
  return deleteRequest(`products/types/${id}`)
}