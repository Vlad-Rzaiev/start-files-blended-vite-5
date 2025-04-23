import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectIsLoading = state => state.currency.isLoading;

export const selectIsError = state => state.currency.isError;

export const selectRates = state => state.currency.rates;

export const selectFilteredRates = createSelector(
  [selectRates, selectCurrency, selectNameFilter],
  (rates, baseCurrency, fiteredText) => {
    return rates
      .filter(
        ([code]) =>
          code !== baseCurrency &&
          code.toLowerCase().includes(fiteredText.toLowerCase().trim()),
      )
      .map(([code, rate]) => ({ code, rate: (1 / rate).toFixed(2) }));
  },
);
