import React from 'react';
import { HoroscopeList } from './horoscope-list';

export default {
  component: HoroscopeList,
  title: 'HoroscopeList',
};

export const primary = () => {
  return <HoroscopeList setUserHoroscope={() => {}} />;
};
