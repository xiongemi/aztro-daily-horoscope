import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdhHoroscope } from '@aztro-daily-horoscope/models';

export const horoscopeSlice = createSlice({
  name: 'horoscope',
  initialState: null,
  reducers: {
    setUserHoroscope(_, action: PayloadAction<AdhHoroscope>) {
      return action.payload;
    },
  },
});
