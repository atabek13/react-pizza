import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilterState, TFilterSort } from './types';
import { getFilterState } from '../../utils/getFilterState';

const initialState: IFilterState = getFilterState();

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterSearch(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setFilterCategory(state, { payload }: PayloadAction<string>) {
      state.categoryType = payload;
    },
    setFilterSort(state, { payload }: PayloadAction<TFilterSort>) {
      state.sort = payload;
    },
    setFilterPageCount(state, { payload }: PayloadAction<number>) {
      state.pageCount = payload;
    },
  },
});
export const { setFilterSearch, setFilterCategory, setFilterSort, setFilterPageCount } =
  filterSlice.actions;
export default filterSlice.reducer;
