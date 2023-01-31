import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import authService from './authService';
import type { Credentials } from '../../types/auth';

const initialState = {
  isAuthorized: false,
  name: '',
  email: '',
  _id: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: 'error',
};

export const onSignUp = createAsyncThunk(
  '/auth/signup',
  async (input: Credentials, thunkAPI) => {
    const data = await authService.onSignUp(input);

    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // deleteFromState: (state, action) => {
    //   const productId = action.payload;
    //   state.products = state.products.filter(
    //     (product) => product._id !== productId
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(onSignUp.fulfilled, (state, action) => {
        state.isAuthorized = true;
        state.isLoading = false;
        state.isSuccess = true;
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(onSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      });
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
