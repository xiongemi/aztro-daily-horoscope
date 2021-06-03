import { AdhHoroscopeItem } from '@aztro-daily-horoscope/models';
import { FortuneState } from '../fortune/fortune-state.interface';

export interface RootState {
  error?: Error | string;
  horoscope?: AdhHoroscopeItem;
  fortune: FortuneState;
}
