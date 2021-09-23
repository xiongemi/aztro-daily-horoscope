import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// Avoid conflict with app.json
// @ts-ignore
import App from './App.tsx';

it('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('zodiac-sign-list')).toBeTruthy();
});
