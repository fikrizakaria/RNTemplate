import React from 'react';
import {TouchableOpacity} from 'react-native';

function Touchable({to, children, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      {children}
    </TouchableOpacity>
  );
}

export default Touchable;
