import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductType from './ProductType';
import { getAll } from './productTypeSlice';

export default function ProductTypeList () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.productType)
  const productTypes = store.productTypes

  useEffect(()=> {
    dispatch(getAll())
  }, [])

  return (
    <div>
      {productTypes.list.length > 0 && 
        productTypes.list.map(productType =>
          <ProductType 
            key={productType.id}
            name={productType.name}
            description={productType.description}
            imageUrl={productType.imageUrl}
          />  
        )
      }
    </div>
  )
}