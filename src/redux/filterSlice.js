import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';//початкове значення

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState, 
  reducers: {
    changeFilter(_, action) {
      return action.payload; // обновлення
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;