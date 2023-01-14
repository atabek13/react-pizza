import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { api } from '../../api';
import { Status, TPizzaObj } from '../pizza/types';
import { IModalState } from './types';

export const getPizzaModalThunk = createAsyncThunk<TPizzaObj, string>(
  'modal/getPizzaModalThunk',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get<TPizzaObj>(`pizzas/${id}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState: IModalState = {
  modalPizzas: null,
  modalStatus: Status.LOADING,
  modalId: '',
  modalShow: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    getModalId(state, { payload }: PayloadAction<string>) {
      state.modalId = payload;
      if (!payload) {
        state.modalPizzas = null;
      }
    },
    setModalShow(state, { payload }: PayloadAction<boolean>) {
      state.modalShow = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPizzaModalThunk.pending, (state) => {
      state.modalStatus = Status.LOADING;
      state.modalPizzas = null;
    });
    builder.addCase(getPizzaModalThunk.fulfilled, (state, { payload }) => {
      state.modalPizzas = payload;
      state.modalStatus = Status.SUCCESS;
    });
    builder.addCase(getPizzaModalThunk.rejected, (state) => {
      state.modalStatus = Status.ERROR;
      state.modalPizzas = null;
    });
  },
});

export const { getModalId, setModalShow } = modalSlice.actions;
export default modalSlice.reducer;
