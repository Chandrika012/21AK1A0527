import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = ({ filteredProducts }) => {
  const { products, loading } = useContext(ProductContext);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {displayProducts.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

