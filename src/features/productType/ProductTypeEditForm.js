import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addProductType, editProductType, getById, setFormField, setResetForm } from "./productTypeSlice"
import FormControl from "../../common/sharedComponents/form/FormControl";
import { TextButton } from '../../common/sharedComponents/page/Button';
import Image from '../../common/sharedComponents/page/Image';

export default function ProductTypeEditForm ({mode}) {
  const dispatch = useDispatch()
  const store = useSelector(state => state.productType)
  const fields = store.form.fields
  const location = useLocation()
  const navigate = useNavigate()
  const id = location.pathname.split('/')[3]
  const form = useRef()
  const [validForm, setValidForm] = useState(false)

  useEffect(()=> {
    if (mode === 'edit') dispatch(getById(id))
    if (mode === 'create') dispatch(setResetForm())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onChangeField (e) {
    dispatch(setFormField({field: e.target.name, value: e.target.value}))
    setValidForm(form.current.checkValidity())
  }

  function onSubmitForm (e) {
    e.preventDefault()
    if (mode === 'edit') {
      dispatch(editProductType(fields))
      navigate(`/products/types/${id}`)
    }
    if (mode === 'create') {
      dispatch(addProductType(fields))
      navigate(`/`)
    }
  }

  return (
    <form onSubmit={(e) => onSubmitForm(e)} className='product-type-container' ref={form}>
      <div className='card product-type-edit-form'>
        {mode === 'create' && <h2 className='heading--xl'>Crear nuevo producto</h2>}
        {mode === 'edit' && <h2 className='heading--xl'>Editar producto</h2>}
        <FormControl
          name={'name'}
          type={'text'}
          placeholder={'Nombre'}
          value={fields.name}
          onChange={(e) => onChangeField(e)}
          required={true}
        >
          <p className="content-lg">Nombre</p>
        </FormControl>
        <FormControl
          name={'description'}
          type={'textarea'}
          placeholder={'Descripción'}
          value={fields.description}
          onChange={(e) => onChangeField(e)}
          required={true}
        >
          <p className="content-lg">Descripción</p>
        </FormControl>
        <FormControl
          name={'imageUrl'}
          type={'url'}
          placeholder={'https://...'}
          value={fields.imageUrl}
          onChange={(e) => onChangeField(e)}
        >
          <p className="content-lg">Url de imagen</p>
        </FormControl>
        <TextButton type={'submit'} text={'GUARDAR'} disabled={!validForm}></TextButton>
      </div>
      
      <Image
        src={fields.imageUrl} 
        alt={'vista previa de url de imagen'}
        className={'product-type-image'}
      />
    
    </form>
  )
}