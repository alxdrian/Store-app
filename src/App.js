import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductTypeDetails from './pages/productType/ProductTypeDetails';
import ProductTypeEdit from './pages/productType/ProductTypeEdit';
import ProductTypeSearch from "./pages/productType/ProductTypeSearch";

export default function App () {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductTypeSearch />} />
          <Route path="/products/types" element={<ProductTypeSearch />} />
          <Route path="/products/types/search" element={<ProductTypeSearch />} />
          <Route path="/products/types/search/:filters" element={<ProductTypeSearch />} />
          <Route path="/products/types/new" element={<ProductTypeEdit mode={'create'}/>} />
          <Route path="/products/types/:id" element={<ProductTypeDetails />} />
          <Route path="/products/types/:id/edit" element={<ProductTypeEdit mode={'edit'}/>} />
        </Routes>
      </Router>
    </Provider> 
  )
}
