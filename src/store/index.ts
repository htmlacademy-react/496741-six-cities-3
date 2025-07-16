import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api.ts';
import { redirect } from './middlewares/redirect.ts';

export const api = createAPI();

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: api,},})
    .concat(redirect),
});
