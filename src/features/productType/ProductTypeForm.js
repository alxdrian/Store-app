import { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getById, setFormField } from "./productTypeSlice"
import FormControl from "../../common/sharedComponents/form/FormControl";
import { TextButton } from '../../common/sharedComponents/page/Button';

export default function ProductTypeForm () {
  const dispatch = useDispatch()
  const store = useSelector(state => state.productType)
  const form = store.form.fields
  const location = useLocation()  
  const id = location.pathname.split('/')[3]
  const previewImg = useRef()
  const [validForm, setValidForm] = useState(true)

  useEffect(()=> {
    dispatch(getById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onChangeField (e) {
    e.preventDefault()
    dispatch(setFormField({field: e.target.name, value: e.target.value}))
    setValidForm(e.target.validity.valid)
  }

  return (
    <form>
      <FormControl
        name={'name'}
        type={'text'}
        placeholder={'Nombre'}
        value={form.name}
        onChange={(e) => onChangeField(e)}
        required={true}
      >
        <p className="content-lg">Nombre</p>
      </FormControl>
      <FormControl
        name={'description'}
        type={'textarea'}
        placeholder={'Descripción'}
        value={form.description}
        onChange={(e) => onChangeField(e)}
        required={true}
      >
        <p className="content-lg">Descripción</p>
      </FormControl>
      <FormControl
        name={'imageUrl'}
        type={'url'}
        placeholder={'https://...'}
        value={form.imageUrl}
        onChange={(e) => onChangeField(e)}
      >
        <p className="content-lg">Url de imagen</p>
      </FormControl>
      <div>
        <p>Vista previa</p>
        <img 
          src={form.imageUrl} 
          alt='vista previa de url de imagen'
          ref={previewImg}
          onError={(e) => previewImg.current.src = 'https://www.quicideportes.com/assets/images/custom/no-image.png' }
        />
      </div>
      <TextButton type={'submit'} text={'GUARDAR'} disabled={!validForm}></TextButton>
    </form>
  )
}