import React from 'react';
import type { Product } from '../../types/product';

const ProductItem = (props: Product) => {
  const { _id, title, price, description, imageUrl } = props;

  return <div className="flex justify-start items-start">item</div>;
};

export default ProductItem;
