import { rootStore } from '@aztro-daily-horoscope/store';
import {
  ZodiacSignListContainer,
  HoroscopeCardContainer,
} from '@aztro-daily-horoscope/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Zodiac Sign List"
            component={ZodiacSignListContainer}
          />
          <Stack.Screen
            name="Horoscope Card"
            component={HoroscopeCardContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
