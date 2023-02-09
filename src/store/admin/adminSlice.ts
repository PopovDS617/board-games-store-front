import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
  AsyncThunkAction,
  AsyncThunkPayloadCreator,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import adminService from './adminService';
import { NewProduct } from '../../@types/state';
import { AxiosResponse } from 'axios';

const initialState = {
  isAdmin: true,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: '',
  result: null as AxiosResponse,
};

export const addNewProduct = createAsyncThunk(
  '/admin/addNew',
  async (data: NewProduct, thunkAPI) => {
    const result = await adminService.addNewProduct(data);
    return result;
  }
);
export const deleteProduct = createAsyncThunk(
  '/admin/delete-product',
  async (productId: string, thunkAPI) => {
    try {
      const result = await adminService.deleteProduct(productId);
      return result;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.result = action.payload;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.result = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
