import { render } from '@testing-library/react';

import HoroscopeCard from './horoscope-card';

describe('HoroscopeCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HoroscopeCard />);
    expect(baseElement).toBeTruthy();
  });
});
