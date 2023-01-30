import React from 'react';
import type { Product } from '../../types/product';
import { AppDispatch } from '../../store/store';
import { ThunkAction } from '@reduxjs/toolkit';

const ProductItem = (props: {
  product: Product;
  isAdmin: boolean;
  onDelete: any;
}) => {
  const { _id, title, price, description, imageUrl } = props.product;

  const dep = () => {
    console.log('deleted');
    props.onDelete(_id);
  };

  const deleteButton = <button onClick={dep}>delete</button>;

  return (
    <div className="flex flex-col justify-start items-startborder-solid border-2 border-black mx-2">
      <div className="font-extrabold text-3xl text-center">{title}</div>
      <div>image placeholder</div>
      <div className="font-mono">{description}</div>
      <div className="font-bold text-center">$ {price}</div>
      {props.isAdmin ? deleteButton : null}
    </div>
  );
};

export default ProductItem;
