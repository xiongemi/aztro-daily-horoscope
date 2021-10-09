import {
  AdhHoroscope,
  AdhHoroscopeDay,
  AdhZodiacSign,
  AdhZodiacSignItem,
} from '@aztro-daily-horoscope/models';
import {
  aztroService,
  transfromAztroHoroscpeResponseToAdhHoroscope,
} from '@aztro-daily-horoscope/services';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.type';
import { RootState } from '../root/root-state.interface';

export const HOROSCOPE_FEATURE_KEY = 'horoscope';
export interface HoroscopeState {
  loadingStatus: LoadingStatus;
  error?: string;
  zodiacSignItem?: AdhZodiacSignItem;
  day?: AdhHoroscopeDay;
  horoscope?: AdhHoroscope;
}

export const fetchHoroscope = createAsyncThunk<
  AdhHoroscope,
  { zodiacSign: AdhZodiacSign, day: AdhHoroscopeDay }
>('horoscope/fetchStatus', async ({ zodiacSign, day }, { rejectWithValue }) => {
  try {
    const horoscopeResponse = await aztroService.getHoroscope(zodiacSign, day);
    return transfromAztroHoroscpeResponseToAdhHoroscope(horoscopeResponse);
  } catch (error) {
    return rejectWithValue({ error });
  }
});

export const initialHoroscopeState: HoroscopeState = {
  loadingStatus: 'not loaded'
};

export const horoscopeSlice = createSlice({
  name: HOROSCOPE_FEATURE_KEY,
  initialState: initialHoroscopeState,
  reducers: {
    setUserZodiacSignItem(
      state: HoroscopeState,
      action: PayloadAction<AdhZodiacSignItem>
    ) {
      state.zodiacSignItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoroscope.pending, (state: HoroscopeState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchHoroscope.fulfilled,
        (state: HoroscopeState, action: PayloadAction<AdhHoroscope>) => {
          state.horoscope = action.payload;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchHoroscope.rejected, (state: HoroscopeState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const horoscopeReducer = horoscopeSlice.reducer;
export const horoscopeActions = { fetchHoroscope, ...horoscopeSlice.actions};

const getHoroscopeState = (rootState: RootState): HoroscopeState =>
  rootState[HOROSCOPE_FEATURE_KEY];

const getUserZodiacItem = (
  rootState: RootState
): AdhZodiacSignItem | undefined => getHoroscopeState(rootState).zodiacSignItem;

const getUserZodiac = (
  rootState: RootState
): AdhZodiacSign | undefined => getUserZodiacItem(rootState)?.zodiacSign;

const getUserHoroscope = (rootState: RootState): AdhHoroscope | undefined =>
  getHoroscopeState(rootState).horoscope;

const getHoroscopeLoadingStatus = (rootState: RootState): LoadingStatus =>
  getHoroscopeState(rootState).loadingStatus;

export const horoscopeSelectors = { getUserZodiacItem, getUserZodiac, getUserHoroscope, getHoroscopeLoadingStatus };
