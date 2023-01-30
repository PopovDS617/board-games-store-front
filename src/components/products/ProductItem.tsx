import React from 'react';
import type { Product } from '../../types/product';

const ProductItem = (props: { product: Product }) => {
  const { _id, title, price, description, imageUrl } = props.product;

  return (
    <div className="flex flex-col justify-start items-startborder-solid border-2 border-black mx-2">
      <div className="font-extrabold text-3xl text-center">{title}</div>
      <div>image placeholder</div>
      <div className="font-mono">{description}</div>
      <div className="font-bold text-center">$ {price}</div>
    </div>
  );
};

export default ProductItem;
