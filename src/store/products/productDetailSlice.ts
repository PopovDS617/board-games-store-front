import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import productsService from './productsService';
import { ParsedUrlQuery } from 'querystring';

const initialState = {
  product: { title: '', _id: '' },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: 'error',
};

export const getSingleProduct = createAsyncThunk(
  '/productDetail/getOne',
  async (productId: string | string[], thunkAPI) => {
    const data = await productsService.getSingleProduct(productId);

    return data;
  }
);

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
        console.log(state.product);
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      });
  },
});
export const productDetailActions = productDetailSlice.actions;
export default productDetailSlice.reducer;
