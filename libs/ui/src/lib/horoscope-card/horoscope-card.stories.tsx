import { mockHoroscope } from '@aztro-daily-horoscope/models';
import { LoadingStatus } from '@aztro-daily-horoscope/store';
import React from 'react';

import { ZodiacSignList } from '../zodiac-sign-list/zodiac-sign-list';

import { HoroscopeCard } from './horoscope-card';

export default {
  component: HoroscopeCard,
  title: 'HoroscopeCard',
};

export const primary = () => {
  return (
    <HoroscopeCard
      horoscope={mockHoroscope}
      zodiacItem={ZodiacSignList[0]}
      loadingStatus={LoadingStatus.Success}
      getUserHoroscope={() => {}}
    />
  );
};
