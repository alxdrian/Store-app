import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { parseFilters } from '../../common/helpers/utils';
import FormControl from "../../common/sharedComponents/form/FormControl";
import Banner from '../../common/sharedComponents/page/Banner';
import { TextButton } from '../../common/sharedComponents/page/Button';
import { getAll, setSearch } from './productTypeSlice';

export default function ProductTypeSearchForm () {
  const dispatch = useDispatch()
  const location = useLocation()
  const query = location.pathname.split('/')[4] || ''
  const filters = parseFilters(query)
  const search = useSelector(state => state.productType).search
  
  useEffect(()=> {
    dispatch(setSearch(filters.name || ''))
    dispatch(getAll(query))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Banner>
      <div className='search-form'>
        <FormControl
          type={'text'}
          name={'search'}
          id={'search'}
          placeholder={'Tu tipo de producto ...'}
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        >
          <p className="heading--xxl mb-10">Los mejores productos para ti</p>
          <p className='content--lg'>Encuéntralo a un click de distancia</p>
        </FormControl>
        <Link
          reloadDocument
          to={`/products/types/search/name=${search}`}
        >
          <TextButton
            type={'button'}
            text={'Buscar'}
          />
        </Link>
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