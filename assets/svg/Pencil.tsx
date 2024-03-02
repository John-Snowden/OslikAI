import React from 'react';
import {Path, G, Svg} from 'react-native-svg';

import {Themes} from '../../Theme';

interface IProps {
  size: number;
}

export const Pencil: React.FC<IProps> = ({size}) => {
  return (
    <Svg fill={Themes.lightBlue} width={size} height={size} viewBox="0 0 24 24">
      <Path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z" />
    </Svg>
  );
};
