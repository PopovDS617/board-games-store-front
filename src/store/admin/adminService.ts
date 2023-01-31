import axios from 'axios';
import { Product } from '../../types/product';
import type { NewProduct } from '../../types/state';

const addNewProduct = async (data: NewProduct) => {
  const response = await axios({
    method: 'POST',
    url: process.env.TEST_SERVER_URI + 'admin/' + 'add-product',
    data: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.data;
};
const deleteProduct = async (productId: string) => {
  const response = await axios({
    method: 'DELETE',
    url: process.env.TEST_SERVER_URI + 'admin/' + 'delete-product',
    data: { productId: productId },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

const adminService = { addNewProduct, deleteProduct };

export default adminService;
