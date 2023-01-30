import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productsSlice';
import adminReducer from './admin/adminSlice';

const store = configureStore({
  reducer: { product: productReducer, admin: adminReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
