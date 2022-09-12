import React from 'react';
import {ImageBackground} from 'react-native';

function ImageBackgroundC({source, style}) {
  return <ImageBackground source={{uri: source}} style={{...style}} />;
}

export default ImageBackgroundC;
