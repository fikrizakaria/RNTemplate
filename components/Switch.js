import React from 'react';
import {Switch} from 'react-native';

function SwitchC({thumbColor, trackColorFalse, trackColorTrue}) {
  return (
    <Switch
      thumbColor={thumbColor}
      trackColor={{false: trackColorFalse, true: trackColorTrue}}
    />
  );
}

export default SwitchC;
