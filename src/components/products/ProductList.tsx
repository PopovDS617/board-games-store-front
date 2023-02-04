import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import type { Product } from '../../@types/product';
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
  const { isAuthorized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
            key={Math.random() + 25}
            isAdmin={isAdmin}
            onDelete={deleteHandler.bind(null, product._id)}
            isAuthorized={isAuthorized}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
