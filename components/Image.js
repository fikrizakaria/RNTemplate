import React from 'react';
import {Image} from 'react-native';

function ImageC({source, style}) {
  return (
    <Image
      source={{uri:source}}
      style={...style}
    />
  );
}

export default ImageC;
