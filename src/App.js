import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/Home';
import ProductTypeDetails from './pages/productType/ProductTypeDetails';
import ProductTypeForm from './pages/productType/ProductTypeForm';

export default function App () {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/types" element={<Home />} />
          <Route path="/products/types/:id" element={<ProductTypeDetails />} />
          <Route path="/products/types/new" element={<ProductTypeForm />} />
          <Route path="/products/types/edit" element={<ProductTypeForm />} />
        </Routes>
      </Router>
    </Provider> 
  )
}
