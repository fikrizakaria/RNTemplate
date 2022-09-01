import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export function Navigator({children}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {children}
    </Stack.Navigator>
  );
}
export const Screen = Stack.Screen;
