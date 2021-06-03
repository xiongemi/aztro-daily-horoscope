import { AdhFortune, AdhFortuneDay } from '@aztro-daily-horoscope/models';
import { LoadingStatus } from '../models/loading-status.enum';

export interface FortuneState {
  loadingStatus: LoadingStatus;
  day?: AdhFortuneDay;
  fortune?: AdhFortune;
}
