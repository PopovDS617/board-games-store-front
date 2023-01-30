import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import type { Product } from '../../types/product';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import {
  deleteFromState,
  getProducts,
} from '../../store/products/productsSlice';
import { deleteProduct } from '../../store/admin/adminSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading: productLoading } = useAppSelector(
    (state) => state.product
  );
  const {
    isAdmin,
    isLoading: adminLoading,
    isError: adminError,
  } = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const deleteHandler = (productId: string) => {
    dispatch(deleteProduct(productId)).then((result) => {
      dispatch(getProducts());
    });
    // if (!adminError) {
    //   dispatch(deleteFromState({ productId: productId }));
    // }
  };

  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      {products.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product._id}
            isAdmin={isAdmin}
            onDelete={deleteHandler}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
