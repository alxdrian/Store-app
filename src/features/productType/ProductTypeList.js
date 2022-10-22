import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ProductTypeCard from './ProductTypeCard';

export default function ProductTypeList () {
  const productTypes = useSelector(state => state.productType)

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
          <Link 
            to={`/products/types/${productType.id}`}
            key={`productType-${productType.id}`}
          >
            <ProductTypeCard
              name={productType.name}
              imageUrl={productType.imageUrl}
            />  
          </Link>
        )
      }
    </div>
  )
}