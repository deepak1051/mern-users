import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './apis/usersApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

export * from './apis/usersApi';
