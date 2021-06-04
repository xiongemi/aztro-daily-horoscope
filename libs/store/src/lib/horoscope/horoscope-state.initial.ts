import { LoadingStatus } from '../models/loading-status.enum';

import { HoroscopeState } from './horoscope-state.interface';

export const initialHoroscopeState: HoroscopeState = {
  loadingStatus: LoadingStatus.Initial,
};
