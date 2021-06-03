import { AdhHoroscopeDay, AdhZodiacSign } from '@aztro-daily-horoscope/models';

import { AztroHoroscpeResponse } from './aztro-horoscope-response.interface';

async function getHoroscope(
  zodiacSign: AdhZodiacSign,
  day: AdhHoroscopeDay
): Promise<AztroHoroscpeResponse> {
  const response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiacSign}&day=${day}`
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const aztroService = { getHoroscope };
