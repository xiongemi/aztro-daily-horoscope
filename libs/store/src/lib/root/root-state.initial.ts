import { initialHoroscopeState } from '../horoscope/horoscope.slice';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  horoscope: initialHoroscopeState,
};
