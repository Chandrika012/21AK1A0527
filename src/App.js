import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductFilters from './components/ProductFilters';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <ProductProvider>
      <Router>
        <div>
          <ProductFilters setFilteredProducts={setFilteredProducts} />
          <Routes>
            <Route path="/" element={<ProductList filteredProducts={filteredProducts} />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;




