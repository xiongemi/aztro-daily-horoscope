import { AdhHoroscopeDay, AdhZodiacSign } from '@aztro-daily-horoscope/models';

import { AztroHoroscpeResponse } from './aztro-horoscope-response.interface';

async function getHoroscope(
  zodiacSign: AdhZodiacSign,
  day: AdhHoroscopeDay
): Promise<AztroHoroscpeResponse> {
  const response: Response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiacSign.toLowerCase()}&day=${day}`,
    {
      method: 'POST',
    }
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const aztroService = { getHoroscope };
