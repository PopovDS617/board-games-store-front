import axios from 'axios';
import { Product } from '../../types/product';
import type { NewProduct } from '../../types/state';

const addNewProduct = async (data: NewProduct) => {
  const response = await axios({
    method: 'POST',
    url: process.env.TEST_SERVER_URI + 'admin/' + 'new',
    data: data,
  });
  const result = response;
  return result;
};

const adminService = { addNewProduct };

export default adminService;
