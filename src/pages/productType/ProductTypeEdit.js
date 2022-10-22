import Page from "../../common/sharedComponents/page/Page";
import ProductTypeEditForm from "../../features/productType/ProductTypeEditForm";

export default function ProductTypeEdit ({mode}) {
  return (
    <Page>
      <ProductTypeEditForm mode={mode}/>
    </Page>
  )
}