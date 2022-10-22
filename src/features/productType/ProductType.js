import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductType, getById } from "./productTypeSlice";
import { TextButton } from '../../common/sharedComponents/page/Button';

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
    navigate('/products/type')
  }

  return (
    <div>
      <div>
        <p>{productType.name}</p>
        <p>{productType.description}</p>
        <img src={productType.imageUrl} alt={productType.name} />
      </div>
      
      <Link to={`${location.pathname}/edit`}>
        <TextButton type={'button'} text={'EDITAR'}></TextButton>
      </Link>
      <TextButton 
        type={'button'} 
        text={'ELIMINAR'}
        onClick={e => onDelete()}
      >
      </TextButton>
    </div>
  )
}
