import { render } from '@testing-library/react';

import HoroscopeItem from './horoscope-item';

describe('HoroscopeItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HoroscopeItem />);
    expect(baseElement).toBeTruthy();
  });
});
