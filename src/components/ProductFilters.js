import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductFilters = ({ setFilteredProducts }) => {
  const { products } = useContext(ProductContext);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [availability, setAvailability] = useState(false);

  const handleFilter = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    if (minPrice) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }
    if (minRating) {
      filtered = filtered.filter(product => product.rating >= minRating);
    }
    if (availability) {
      filtered = filtered.filter(product => product.availability);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Filter Products</h2>
      {/* Input fields for filters */}
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Rating" value={minRating} onChange={e => setMinRating(e.target.value)} />
      <label>
        Available:
        <input type="checkbox" checked={availability} onChange={e => setAvailability(e.target.checked)} />
      </label>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default ProductFilters;
