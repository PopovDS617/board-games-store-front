import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productsSlice';
import adminReducer from './admin/adminSlice';
import authReducer from './auth/authSlice';
import productDetailReducer from './products/productDetailSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    admin: adminReducer,
    auth: authReducer,
    productDetail: productDetailReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
