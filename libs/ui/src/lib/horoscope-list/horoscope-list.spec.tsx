import { render } from '@testing-library/react';

import HoroscopeList from './horoscope-list';

describe('HoroscopeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HoroscopeList />);
    expect(baseElement).toBeTruthy();
  });
});
