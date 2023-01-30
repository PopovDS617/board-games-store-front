import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import adminService from './adminService';
import { NewProduct } from '../../types/state';
import {AxiosResponse } from 'axios'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
 error:'',
 result:null as AxiosResponse
 
};

export const addNewProduct = createAsyncThunk(
  '/products/getAll',
  async (data: NewProduct, thunkAPI) => {
    return await adminService.addNewProduct(data);
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading=true,
        
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {  
        state.isLoading = false;
        state.isSuccess = true;
        state.result = action.payload;})
      .addCase(addNewProduct.rejected, (state, action) => {
        state.error=action.error.message
      });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
