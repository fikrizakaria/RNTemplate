import React from 'react';
import {View} from 'react-native';

function ShadowViewC({
  children,
  style: {
    shadowOffsetHeight = 0,
    shadowOffsetWidth = 0,

    ...styles
  },
}) {
  return (
    <View
      style={{
        ...styles,
        shadowOffset: {height: shadowOffsetHeight, width: shadowOffsetWidth},
      }}>
      {children}
    </View>
  );
}

export default ShadowViewC;
