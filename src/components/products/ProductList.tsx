import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import type { Product } from '../../types/product';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { getProducts } from '../../store/products/productsSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  useEffect(() => {}, []);

  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      {products.map((product) => {
        return <ProductItem product={product} key={product._id} />;
      })}
    </div>
  );
};

export default ProductList;
