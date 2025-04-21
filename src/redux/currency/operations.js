import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency, latestRates } from '../../service/exchangeAPI';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async (crd, thunkAPI) => {
    try {
      const data = await getUserInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return !state.currency.baseCurrency;
    },
  },
);

export const getExchangeData = createAsyncThunk(
  'currency/getExchangeData',
  async (userData, thunkAPI) => {
    try {
      const data = await exchangeCurrency(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCurrentExchangeRates = createAsyncThunk(
  'currency/getCurrentExchangeRates',
  async (baseCurrency, thunkAPI) => {
    try {
      const data = await latestRates(baseCurrency);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
