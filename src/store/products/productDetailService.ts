import axios from 'axios';

const getSingleProduct = async (productId: string | string[]) => {
  const response = await axios({
    method: 'GET',
    url: process.env.TEST_SERVER_URI + 'products/' + productId,
  });
  return response.data;
};

const productsService = { getSingleProduct };
export default productsService;
