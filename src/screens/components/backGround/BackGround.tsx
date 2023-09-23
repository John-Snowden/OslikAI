import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {Themes} from '../../../../Theme';

export const BackGround: React.FC = () => {
  const colors = [Themes.blue23, Themes.blue23, Themes.blue23];

  return (
    <LinearGradient
      colors={colors}
      locations={[0, 0.25, 1]}
      style={styles.screen}
    />
  );
};
