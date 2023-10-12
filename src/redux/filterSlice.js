import { createSlice } from '@reduxjs/toolkit';

const inFilterState = '';//початкове значення

const filterSlice = createSlice({
  name: 'filter',
  initialState: inFilterState, 
  reducers: {
    changeFilter(_, action) {
      return action.payload; // обновлення
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
