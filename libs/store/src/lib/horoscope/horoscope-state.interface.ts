import {
  AdhHoroscope,
  AdhHoroscopeDay,
  AdhZodiacSign,
} from '@aztro-daily-horoscope/models';

import { LoadingStatus } from '../models/loading-status.enum';

export interface HoroscopeState {
  zodiacSign?: AdhZodiacSign;
  loadingStatus: LoadingStatus;
  day?: AdhHoroscopeDay;
  horoscope?: AdhHoroscope;
}
