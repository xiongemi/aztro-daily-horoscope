import React from 'react';
import { render } from '@testing-library/react-native';

import { HoroscopeCard } from './horoscope-card';

describe('HoroscopeCard', () => {
  it('should render successfully', () => {
    const { container } = render(<HoroscopeCard getUserHoroscope={jest.fn()}/>);
    expect(container).toBeTruthy();
  });
});
