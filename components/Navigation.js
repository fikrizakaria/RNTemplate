import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export function Navigator({children}) {
  return <Stack.Navigator></Stack.Navigator>;
}
export function Screen({name, component}) {
  return <Stack.Screen name={name} component={component}></Stack.Screen>;
}
