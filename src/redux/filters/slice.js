import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
