import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductType, getById } from "./productTypeSlice";
import { TextButton } from '../../common/sharedComponents/page/Button';
import Image from '../../common/sharedComponents/page/Image';

export default function ProductType () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.productType)
  const productType = store.selected
  const location = useLocation()
  const navigate = useNavigate()
  const id = location.pathname.split('/')[3]

  useEffect(()=> {
    dispatch(getById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onDelete (e) {
    dispatch(deleteProductType(id))
    navigate('/')
  }

  return (
    <div className='product-type-container'>
      <Image className={'product-type-image'} src={productType.imageUrl} alt={productType.name} />
      <div className='product-type-content'>
        <h1 className='heading--xxl'>{productType.name}</h1>
        <div className='card'>
          <p className='content--xxl'>{productType.description}</p>
        </div>
        <div className='buttons-container'>
          <Link to={`${location.pathname}/edit`}>
            <TextButton type={'button'} text={'Editar'}></TextButton>
          </Link>
          <TextButton 
            type={'button'} 
            text={'Eliminar'}
            onClick={e => onDelete()}
          >
          </TextButton>
        </div>
      </div>
    </div>
  )
}
