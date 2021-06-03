import { AdhFortune, AdhHoroscope } from '@aztro-daily-horoscope/models';

export interface AztroFortuneResponse {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

export function transfromAztroFortuneResponseToAdhFortune(
  responose: AztroFortuneResponse
): AdhFortune {
  return {
    currentDate: new Date(responose.current_date),
    description: responose.description,
    compatibility: responose.compatibility as AdhHoroscope,
    mood: responose.mood,
    color: responose.color,
    luckyNumber: parseInt(responose.lucky_number),
    luckyTime: responose.lucky_time,
  };
}
