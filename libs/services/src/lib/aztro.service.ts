import { AdhFortuneDay, AdhHoroscope } from '@aztro-daily-horoscope/models';
import { AztroFortuneResponse } from './aztro-fortune-response.interface';

async function getFortune(
  horoscope: AdhHoroscope,
  day: AdhFortuneDay
): Promise<AztroFortuneResponse> {
  const response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${horoscope}&day=${day}`
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const aztroService = { getFortune };
