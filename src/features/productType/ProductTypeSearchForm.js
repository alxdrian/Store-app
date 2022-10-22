import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { parseFilters } from '../../common/helpers/utils';
import FormControl from "../../common/sharedComponents/form/FormControl";
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
    <div>
      <FormControl
        type={'text'}
        name={'search'}
        id={'search'}
        placeholder={'Tu tipo de producto ...'}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <p className="content-lg">Buscar</p>
      </FormControl>
      <TextButton
        type={'button'}
        onClick={onSearch}
        text={'BUSCAR'}
      >
      </TextButton>
    </div>
  )
}