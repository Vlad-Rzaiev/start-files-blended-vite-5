import { createSlice } from '@reduxjs/toolkit';
import { getCurrency, getExchangeData } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(getExchangeData.fulfilled, (state, { payload }) => {
        state.exchangeInfo = payload;
      }),
  reducers: {
    setDefaultCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
