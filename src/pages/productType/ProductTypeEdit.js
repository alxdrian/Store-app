import { useSelector } from 'react-redux';
import Page from "../../common/sharedComponents/page/Page";
import Error from '../../common/sharedComponents/status/Error';
import Loader from '../../common/sharedComponents/status/Loader';
import ProductTypeEditForm from "../../features/productType/ProductTypeEditForm";

export default function ProductTypeEdit ({mode}) {
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
      <ProductTypeEditForm mode={mode}/>
    </Page>
  )
}