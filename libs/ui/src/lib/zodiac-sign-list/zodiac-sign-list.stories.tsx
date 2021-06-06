import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ZodiacSignList } from './zodiac-sign-list';

export default {
  component: ZodiacSignList,
  title: 'ZodiacSignList',
};

const Stack = createStackNavigator();

export const primary = () => (
  <ZodiacSignList setUserZodiacSignItem={() => {}} />
);

/* {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Zodiac Sign List"
          component={() => <ZodiacSignList setUserZodiacSignItem={() => {}} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; */
