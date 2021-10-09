import { combineReducers } from '@reduxjs/toolkit';

import { horoscopeSlice } from '../horoscope/horoscope.slice';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  horoscope: horoscopeSlice.reducer,
});
