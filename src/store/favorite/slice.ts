import { getPizzaFavorite } from './../../utils/getPizzaFavorite';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPizzaFavorite } from './types';
import { TPizzaObj } from './../pizza/types';

const initialState: IPizzaFavorite = getPizzaFavorite();

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setAddFavorite(state, { payload }: PayloadAction<TPizzaObj>) {
      localStorage.setItem('favorite', JSON.stringify((state.items = [...state.items, payload])));
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      localStorage.setItem(
        'favorite',
        JSON.stringify((state.items = state.items.filter((prev) => prev.id !== payload))),
      );
    },
    clearFavorite(state) {
      localStorage.setItem('favorite', JSON.stringify((state.items = [])));
    },
  },
});
export const { setAddFavorite, removeFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
