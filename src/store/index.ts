import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import pizza from './pizza/slice';
import favorite from './favorite/slice';
import cart from './cart/slice';
import category from './category/slice';
import sort from './sort/slice';
import filter from './filter/slice';
import modal from './modal/slice';

export const store = configureStore({
  reducer: { pizza, favorite, cart, category, sort, filter, modal },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
