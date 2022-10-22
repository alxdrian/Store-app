import ProductTypeList from "../../features/productType/ProductTypeList";
import ProductTypeSearchForm from "../../features/productType/ProductTypeSearchForm";

export default function ProductTypeSearch () {
  return (
    <div>
      <ProductTypeSearchForm></ProductTypeSearchForm>
      <ProductTypeList></ProductTypeList>
    </div>
  )
}