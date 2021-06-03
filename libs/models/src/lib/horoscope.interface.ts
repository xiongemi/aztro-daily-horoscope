import { AdhZodiacSign } from './zodiac-sign.enum';

export interface AdhHoroscope {
  currentDate: Date;
  description: string;
  compatibility: AdhZodiacSign;
  mood: string;
  color: string;
  luckyNumber: number;
  luckyTime: string;
}
