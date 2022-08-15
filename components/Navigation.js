import React, {Children, cloneElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export function Navigator({children}) {
  return (
    <Stack.Navigator>
      {Children.map(Children.toArray(children), (Elt, i) => (
        <Stack.Screen name={i} component={cloneElement(Elt)}></Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}
export function Screen({name, component}) {
  return <Stack.Screen name={name} component={component}></Stack.Screen>;
}
