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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {productTypes.status.error &&
        <div>
          <p>Code: {productTypes.status.error.code}</p>
          <p>Message: {productTypes.status.error.message}</p>
        </div>
      }
      {productTypes.status.loading && <div>loading ...</div>}
      {productTypes.list.length > 0 && 
        productTypes.list.map(productType =>
          <ProductType 
            key={`productType-${productType.id}`}
            name={productType.name}
            description={productType.description}
            imageUrl={productType.imageUrl}
          />  
        )
      }
    </div>
  )
}