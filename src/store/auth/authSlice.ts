import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import authService from './authService';
import type { Credentials } from '../../@types/auth';
import { expiryDate } from '../../utils/date-utils';

const initialState = {
  isAuthorized: false,
  name: '',
  email: '',
  userId: '',
  token: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: 'error',
};

export const signupThunk = createAsyncThunk(
  '/auth/signup',
  async (input: Credentials, thunkAPI) => {
    const data = await authService.signupHandler(input);

    return data;
  }
);
export const loginThunk = createAsyncThunk(
  '/auth/login',
  async (input: Credentials, thunkAPI) => {
    const data = await authService.loginHandler(input);

    return data;
  }
);

export const logoutThunk = createAsyncThunk(
  '/auth/logout',
  async (userId: string, thunkAPI) => {
    const data = await authService.logoutHandler(userId);
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
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuthorized = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.userId = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('tokenExpTime', expiryDate().toString());
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isAuthorized = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userId = '';
        state.name = '';
        state.email = '';
        state.token = '';
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        //state.message = action.payload;
      });
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
