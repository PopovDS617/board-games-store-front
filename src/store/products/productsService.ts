import axios from 'axios';

const getProducts = async () => {
  const data = await axios({
    method: 'GET',
    url: process.env.TEST_SERVER_URI + 'products',
  });
  const result = data.data.products;
  return result;
};

const getSingleProduct = async (productId: string) => {
  const response = await axios({
    method: 'GET',
    url: process.env.TEST_SERVER_URI + 'products/' + productId,
  });
  return response.data;
};

const productsService = { getProducts, getSingleProduct };
export default productsService;
