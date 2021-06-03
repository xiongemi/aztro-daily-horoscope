import { render } from '@testing-library/react';

import ZodiacSignList from './zodiac-sign-list';

describe('ZodiacSignList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZodiacSignList />);
    expect(baseElement).toBeTruthy();
  });
});
