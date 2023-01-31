import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import productsService from './productsService';

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
  reducers: {
    deleteFromState: (state, action) => {
      const productId = action.payload;

      state.products = state.products.filter(
        (product) => product._id !== productId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      });
  },
});
export const { deleteFromState } = productSlice.actions;
export default productSlice.reducer;
