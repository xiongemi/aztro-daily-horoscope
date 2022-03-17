import { AppRoutes,RootStackParamList } from '@aztro-daily-horoscope/models';
import { rootStore } from '@aztro-daily-horoscope/store';
import {
  ZodiacSignListContainer,
  HoroscopeCardContainer,
} from '@aztro-daily-horoscope/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppRoutes.list}>
          <Stack.Screen
            name={AppRoutes.list}
            component={ZodiacSignListContainer}
          />
          <Stack.Screen
            name={AppRoutes.card}
            component={HoroscopeCardContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
