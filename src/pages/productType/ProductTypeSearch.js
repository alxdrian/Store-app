import { useSelector } from 'react-redux';
import Page from "../../common/sharedComponents/page/Page";
import Pagination from '../../common/sharedComponents/page/Pagination';
import Error from '../../common/sharedComponents/status/Error';
import Loader from '../../common/sharedComponents/status/Loader';
import ProductTypeList from "../../features/productType/ProductTypeList";
import ProductTypeSearchForm from "../../features/productType/ProductTypeSearchForm";

export default function ProductTypeSearch () {
  const productTypes = useSelector(state => state.productType)

  return (
    <Page>
      {productTypes.status.error &&
        <Error
          code={productTypes.status.error.code}
          message={productTypes.status.error.message}
        />
      }
      {productTypes.status.loading && <Loader></Loader>}
        <ProductTypeSearchForm></ProductTypeSearchForm>
        <ProductTypeList></ProductTypeList>
        <Pagination
          count={productTypes.res.count}
          limit={productTypes.res.limit}
          filters={`name=${productTypes.search}`}
        >
        </Pagination>
    </Page>
  )
}