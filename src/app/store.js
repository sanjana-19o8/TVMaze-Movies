import { configureStore } from '@reduxjs/toolkit';
import { showsApi } from '../services/showsApi';

const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(showsApi.middleware),
});
export default store;