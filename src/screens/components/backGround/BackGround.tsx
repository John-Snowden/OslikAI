import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {Themes} from '../../../../Theme';
import {ImageBackground} from 'react-native';

export const BackGround: React.FC = () => {
  const colors = [Themes.blue23, Themes.blue3a, Themes.blue23];

  return (
    <>
      <ImageBackground
        source={require('../../../../assets/images/rome.jpg')}
        resizeMode="cover"
        style={styles.map}
      />
      <LinearGradient
        colors={colors}
        locations={[0, 0.25, 1]}
        useAngle
        angle={45}
        style={styles.screen}
      />
    </>
  );
};
