import { AdhHoroscope, AdhZodiacSign } from '@aztro-daily-horoscope/models';

import { RootState } from '../root/root-state.interface';

import { HoroscopeState } from './horoscope-state.interface';

const getHoroscopeState = (rootState: RootState): HoroscopeState =>
  rootState.horoscope;

const getUserZodiac = (rootState: RootState): AdhZodiacSign =>
  getHoroscopeState(rootState)?.zodiacSign;

const getUserHoroscope = (rootState: RootState): AdhHoroscope =>
  getHoroscopeState(rootState)?.horoscope;

export const horoscopeSelectors = { getUserZodiac, getUserHoroscope };
