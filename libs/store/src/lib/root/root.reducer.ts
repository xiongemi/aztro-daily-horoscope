import { combineReducers } from '@reduxjs/toolkit';

import { errorSlice } from '../error/error.slice';
import { horoscopeSlice } from '../horoscope/horoscope.slice';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  error: errorSlice.reducer,
  horoscope: horoscopeSlice.reducer,
});
