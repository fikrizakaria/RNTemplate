import React from 'react';
import {TouchableOpacity} from 'react-native';

function TouchableOpacity({to, children, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      {children}
    </TouchableOpacity>
  );
}

export default TouchableOpacity;
