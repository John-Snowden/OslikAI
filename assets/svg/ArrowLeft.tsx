import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Themes} from '../../Theme';

export const ArrowLeft = () => {
  return (
    <Svg
      id="Bold"
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill={Themes.white}>
      <Path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z" />
    </Svg>
  );
};
