import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from './../../api';
import { ISortState, TSort } from './types';
import { Status } from './../pizza/types';

export const getSortThunk = createAsyncThunk<TSort[]>('sort/getSortThunk', async () => {
  try {
    const res = await api.get('/sort');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    alert('Ошибка при получений сортировка!');
  }
});

const initialState: ISortState = {
  sort: [],
  status: Status.LOADING,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSortThunk.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getSortThunk.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS;
      state.sort = payload;
    });
    builder.addCase(getSortThunk.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});
export default sortSlice.reducer;
