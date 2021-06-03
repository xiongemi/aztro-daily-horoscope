import { AdhHoroscope } from './horoscope.enum';

export interface AdhFortune {
  currentDate: Date;
  description: string;
  compatibility: AdhHoroscope;
  mood: string;
  color: string;
  luckyNumber: number;
  luckyTime: string;
}
