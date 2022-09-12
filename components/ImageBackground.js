import React from 'react';
import {ImageBackground} from 'react-native';

function ImageBackgroundC({children, source, style}) {
  return (
    <ImageBackground source={{uri: source}} style={{...style}}>
      {children}
    </ImageBackground>
  );
}

export default ImageBackgroundC;
