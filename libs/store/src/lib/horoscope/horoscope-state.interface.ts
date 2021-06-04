import {
  AdhHoroscope,
  AdhHoroscopeDay,
  AdhZodiacSignItem,
} from '@aztro-daily-horoscope/models';

import { LoadingStatus } from '../models/loading-status.enum';

export interface HoroscopeState {
  zodiacSignItem?: AdhZodiacSignItem;
  loadingStatus: LoadingStatus;
  day?: AdhHoroscopeDay;
  horoscope?: AdhHoroscope;
}
