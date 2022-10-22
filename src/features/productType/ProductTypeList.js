import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ProductTypeCard from './ProductTypeCard';

export default function ProductTypeList () {
  const productTypes = useSelector(state => state.productType)

  return (
    <div className='card-list'>
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