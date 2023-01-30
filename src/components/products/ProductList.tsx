import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import type { Product } from '../../types/product';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import productsService from '../../store/products/productsService';

const ProductList = () => {
  const state = useAppSelector((state) => {
    //  console.log(state);
    return state.product;
  });

  useEffect(() => {
    const getProd = async () => {
      const data = await productsService.getProducts();
      console.log(data);
    };

    getProd();
  }, []);

  console.log(state);
  //const [products, setProducts] = useState<Array<Product>>([]);

  // const productList = products?.map((item) => {
  //   <ProductItem product={item} />;
  // });

  useEffect(() => {}, []);

  return <div className="flex justify-center items-start">{}</div>;
};

export default ProductList;
