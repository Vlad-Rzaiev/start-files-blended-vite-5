import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrency,
  getCurrentExchangeRates,
  getExchangeData,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  extraReducers: builder =>
    builder
      .addCase(getCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(getExchangeData.pending, state => {
        handlePending(state);
        state.exchangeInfo = null;
      })
      .addCase(getExchangeData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.exchangeInfo = payload;
      })
      .addCase(getExchangeData.rejected, handleRejected)
      .addCase(getCurrentExchangeRates.pending, state => {
        handlePending(state);
        state.rates = [];
      })
      .addCase(getCurrentExchangeRates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rates = payload;
      })
      .addCase(getCurrentExchangeRates.rejected, handleRejected),
  reducers: {
    setDefaultCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
