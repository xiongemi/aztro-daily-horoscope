import {
  AdhHoroscope,
  AdhZodiacSign,
  AdhZodiacSignItem,
} from '@aztro-daily-horoscope/models';

import { LoadingStatus } from '../models/loading-status.enum';
import { RootState } from '../root/root-state.interface';

import { HoroscopeState } from './horoscope-state.interface';

const getHoroscopeState = (rootState: RootState): HoroscopeState =>
  rootState.horoscope;

const getUserZodiacItem = (
  rootState: RootState
): AdhZodiacSignItem | undefined => getHoroscopeState(rootState).zodiacSignItem;

const getUserZodiac = (rootState: RootState): AdhZodiacSign | undefined =>
  getUserZodiacItem(rootState)?.zodiacSign;

const getUserHoroscope = (rootState: RootState): AdhHoroscope | undefined =>
  getHoroscopeState(rootState).horoscope;

const getHoroscopeLoadingStatus = (rootState: RootState): LoadingStatus =>
  getHoroscopeState(rootState).loadingStatus;

export const horoscopeSelectors = {
  getUserZodiacItem,
  getUserZodiac,
  getUserHoroscope,
  getHoroscopeLoadingStatus,
};
