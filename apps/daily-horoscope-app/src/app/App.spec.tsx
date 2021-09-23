import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// Avoid conflict with app.json
// @ts-ignore
import App from './App.tsx';

it('renders correctly', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
