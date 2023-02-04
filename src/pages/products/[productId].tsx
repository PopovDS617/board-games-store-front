import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getSingleProduct } from '../../store/products/productDetailSlice';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const ProductDetailsPage = () => {
  const { product } = useAppSelector((state) => state.productDetail);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { productId } = router.query;

  console.log(product.title);
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch]);

  return <div>title</div>;
};

export default ProductDetailsPage;
