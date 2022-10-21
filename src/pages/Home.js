import { useEffect, useState } from "react"
import { getAllProductTypes } from "../api/productTypeApi"
import ProductType from "../features/productType/ProductType"

export default function Home () {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchProductTypes = async () => {
      const data = await getAllProductTypes()
      setList(data.data.data)
    }
    
    fetchProductTypes()
  }, [])

  return (
    <div>
      Home
      {list?.map(productType => (
        <ProductType />
      ))}
    </div>
  )
}