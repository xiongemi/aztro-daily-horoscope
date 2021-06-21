import { render } from '@testing-library/react-native';

import { HoroscopeCard } from './horoscope-card';

describe('HoroscopeCard', () => {
  it('should render successfully', () => {
    const { container } = render(<HoroscopeCard />);
    expect(container).toBeTruthy();
  });
});
