import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getById } from "./productTypeSlice";

export default function ProductType () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.productType)
  const productType = store.productTypes.selected
  const location = useLocation()  
  const id = location.pathname.split('/')[3]

  useEffect(()=> {
    dispatch(getById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p>{productType.name}</p>
      <p>{productType.description}</p>
      <img src={productType.imageUrl}  alt={productType.name} />
    </div>
  )
}
