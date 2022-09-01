import React, {Children, cloneElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export function Navigator({children}) {
  return <Stack.Navigator>{children}</Stack.Navigator>;
}
export const Screen = Stack.Screen;
