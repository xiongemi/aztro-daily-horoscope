import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { AdhFortune, AdhFortuneDay } from '@aztro-daily-horoscope/models';
import { LoadingStatus } from '../models/loading-status.enum';
import { FortuneState } from './fortune-state.interface';

export const fortuneSlice = createSlice<
  FortuneState,
  SliceCaseReducers<FortuneState>,
  string
>({
  name: 'fortune',
  initialState: { loadingStatus: LoadingStatus.Initial },
  reducers: {
    getUserFortune(state: FortuneState, action: PayloadAction<AdhFortuneDay>) {
      state = {
        loadingStatus: LoadingStatus.Loading,
        day: action.payload,
        fortune: null,
      };
    },
    gerUserFortuneSuccess(
      state: FortuneState,
      action: PayloadAction<AdhFortune>
    ) {
      state.loadingStatus = LoadingStatus.Success;
      state.fortune = action.payload;
    },
    getUserFortuneError(state: FortuneState) {
      state.loadingStatus = LoadingStatus.Error;
    },
  },
});
