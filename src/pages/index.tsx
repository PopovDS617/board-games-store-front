import React from 'react';
import ProductList from '../components/products/ProductList';

const Home = () => {
  return (
    <div className="h-screen">
      <main className="h-full flex justify-center items-center">
        <ProductList />
      </main>
    </div>
  );
};

export default Home;
