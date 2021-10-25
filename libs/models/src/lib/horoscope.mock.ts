import { AdhHoroscope } from './horoscope.interface';
import { AdhZodiacSign } from './zodiac-sign.enum';

export const mockHoroscope: AdhHoroscope = {
  currentDate: 'Jun 04, 2021',
  description:
    "Your fiery energy is pushing you onward and upward, and you feel too great to worry about the long-term. You can tell you're headed roughly in the right direction, and that's all that matters.",
  compatibility: AdhZodiacSign.Libra,
  mood: 'Accomplished',
  color: 'Pink',
  luckyNumber: 92,
  luckyTime: '2am',
};
