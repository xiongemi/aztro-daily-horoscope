import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HoroscopeList } from '@aztro-daily-horoscope/ui';
import { Header } from 'react-native-elements';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Header centerComponent={{ text: 'Daily Horoscope' }} />
      <HoroscopeList />
    </>
  );
};

export default App;
