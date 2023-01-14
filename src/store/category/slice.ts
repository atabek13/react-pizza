import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from './../../api';
import { ICategoryState, TCategory } from './types';
import { Status } from './../pizza/types';

export const getCategoryThunk = createAsyncThunk<TCategory[]>(
  'category/getCategoryThunk',
  async () => {
    try {
      const res = await api.get('category');
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      alert('Ошибка при получений категорий!');
    }
  },
);

const initialState: ICategoryState = {
  category: [],
  status: Status.LOADING,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoryThunk.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getCategoryThunk.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS;
      state.category = payload;
    });
    builder.addCase(getCategoryThunk.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});
export default categorySlice.reducer;
