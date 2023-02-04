import React from 'react';
import type { Product } from '../../@types/product';
import Link from 'next/link';

const ProductItem = (props: {
  product: Product;
  isAdmin: boolean;
  onDelete: () => void;
  isAuthorized: boolean;
}) => {
  const { _id, title, price, description, imageUrl } = props.product;

  //const deleteButton = <button onClick={props.onDelete}>delete</button>;

  return (
    <div className="flex flex-col justify-start items-startborder-solid border-2 border-black mx-2">
      <div className="font-extrabold text-3xl text-center">{title}</div>
      <div>image placeholder</div>
      <div className="font-mono">{description}</div>
      <div className="font-bold text-center">$ {price}</div>
      {/* {props.isAdmin ? deleteButton : null} */}
      {props.isAuthorized && <button onClick={props.onDelete}>delete</button>}
      <Link href={'/products/' + _id}>Details</Link>
    </div>
  );
};

export default ProductItem;
