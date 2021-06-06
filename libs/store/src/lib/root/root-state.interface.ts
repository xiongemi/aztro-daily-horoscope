import { HoroscopeState } from '../horoscope/horoscope-state.interface';

export interface RootState {
  error?: Error | string;
  horoscope: HoroscopeState;
}