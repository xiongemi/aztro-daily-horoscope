import { render } from '@testing-library/react-native';
import React from 'react';

import { HoroscopeCard } from './horoscope-card';

describe('HoroscopeCard', () => {
  it('should render successfully', () => {
    const { container } = render(
      <HoroscopeCard getUserHoroscope={jest.fn()} />
    );
    expect(container).toBeTruthy();
  });
});
