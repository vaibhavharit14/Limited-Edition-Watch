import React from 'react';
import { products } from '../components/products';
import ProductCart from '../components/ProductCart';


const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="home-title">List Products</h1>
      <div className="product-grid">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
