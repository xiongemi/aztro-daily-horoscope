import {
  AdhHoroscope,
  AdhHoroscopeDay,
  AdhZodiacSign,
} from '@aztro-daily-horoscope/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.enum';

import { HoroscopeState } from './horoscope-state.interface';

export const horoscopeSlice = createSlice({
  name: 'horoscope',
  initialState: null,
  reducers: {
    setUserZodiacSign(_, action: PayloadAction<AdhZodiacSign>) {
      return action.payload;
    },
    getUserHoroscope(
      state: HoroscopeState,
      action: PayloadAction<AdhHoroscopeDay>
    ) {
      state.day = action.payload;
      state.loadingStatus = LoadingStatus.Loading;
      state.horoscope = null;
    },
    gerUserHoroscopeSuccess(
      state: HoroscopeState,
      action: PayloadAction<AdhHoroscope>
    ) {
      state.loadingStatus = LoadingStatus.Success;
      state.horoscope = action.payload;
    },
    getUserHoroscopeError(state: HoroscopeState) {
      state.loadingStatus = LoadingStatus.Error;
    },
  },
});
