import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { parseFilters } from '../../common/helpers/utils';
import FormControl from "../../common/sharedComponents/form/FormControl";
import Banner from '../../common/sharedComponents/page/Banner';
import { TextButton } from '../../common/sharedComponents/page/Button';
import { getAll } from './productTypeSlice';

export default function ProductTypeSearchForm () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const query = location.pathname.split('/')[4] || ''
  const filters = parseFilters(query)
  const [search, setSearch] = useState(filters.name || '')

  useEffect(()=> {
    dispatch(getAll(query))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onSearch (e) {
    dispatch(getAll(`name=${search}`))
    navigate(`/products/types/search/name=${search}`)
  }

  return (
    <Banner>
      <div className='search-form'>
        <FormControl
          type={'text'}
          name={'search'}
          id={'search'}
          placeholder={'Tu tipo de producto ...'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          <p className="heading--xxl mb-10">Los mejores productos para ti</p>
          <p className='content--lg'>Encuéntralo a un click de distancia</p>
        </FormControl>
        <TextButton
          type={'button'}
          onClick={onSearch}
          text={'Buscar'}
        />
      </div>
      <Link to={'/products/types/new'}>
        <TextButton
          type={'button'}
          text={'Crear nuevo tipo de producto'}
        />
      </Link>
      
    </Banner>
  )
}