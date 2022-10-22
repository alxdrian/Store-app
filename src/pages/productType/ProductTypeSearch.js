import Page from "../../common/sharedComponents/page/Page";
import ProductTypeList from "../../features/productType/ProductTypeList";
import ProductTypeSearchForm from "../../features/productType/ProductTypeSearchForm";

export default function ProductTypeSearch () {
  return (
    <Page>
      <ProductTypeSearchForm></ProductTypeSearchForm>
      <ProductTypeList></ProductTypeList>
    </Page>
  )
}