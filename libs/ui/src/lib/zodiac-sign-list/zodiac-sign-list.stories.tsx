import React from 'react';

import { ZodiacSignList } from './zodiac-sign-list';

export default {
  component: ZodiacSignList,
  title: 'ZodiacSignList',
};

export const primary = () => {
  return <ZodiacSignList setUserZodiacSign={() => {}} />;
};
