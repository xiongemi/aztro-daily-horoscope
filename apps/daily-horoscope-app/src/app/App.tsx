import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HoroscopeList } from '@aztro-daily-horoscope/ui';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="horoscope-list" component={HoroscopeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
