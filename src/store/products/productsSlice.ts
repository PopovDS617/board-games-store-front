import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import productsService from './productsService';
import { Product } from '../../types/product';

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: 'error',
};

export const getProducts = createAsyncThunk(
  '/products/getAll',
  async (_, thunkAPI) => {
    const data = await productsService.getProducts();
    return data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      });
  },
});
export const pruductActions = productSlice.actions;
export default productSlice.reducer;
