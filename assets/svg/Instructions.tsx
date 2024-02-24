import React from 'react';
import {G, Svg, Path} from 'react-native-svg';

import {Themes} from '../../Theme';

interface IProps {
  size: number;
}

export const Instructions: React.FC<IProps> = ({size}) => {
  return (
    <Svg fill={Themes.white} height={size} width={size} viewBox="0 0 32 32">
      <G>
        <Path d="M11,30H5c-1.7,0-3-1.3-3-3v-6c0-1.7,1.3-3,3-3h6c1.7,0,3,1.3,3,3v6C14,28.7,12.7,30,11,30z" />
      </G>
      <G>
        <Path d="M29,6H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,6,29,6z" />
      </G>
      <G>
        <Path d="M24,10h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,10,24,10z" />
      </G>
      <G>
        <Path d="M29,22H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,22,29,22z" />
      </G>
      <G>
        <Path d="M24,26h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,26,24,26z" />
      </G>
      <Path
        d="M11,2H5C3.3,2,2,3.3,2,5v6c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V5C14,3.3,12.7,2,11,2z M11.7,6.7l-3,3C8.5,9.9,8.3,10,8,10
   S7.5,9.9,7.3,9.7l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L8,7.6l2.3-2.3c0.4-0.4,1-0.4,1.4,0S12.1,6.3,11.7,6.7z"
      />
    </Svg>
  );
};