import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {Themes} from '../../../../Theme';
import {ImageBackground, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants';

export const BackGround: React.FC = () => {
  const colors = [Themes.blue23, Themes.blue23, Themes.blue23 + 'E6'];

  const scale = useSharedValue(SCREEN_HEIGHT / SCREEN_WIDTH);
  const rotate = useSharedValue(0);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: scale.value},
        {rotateZ: String(rotate.value * 90) + 'deg'},
      ],
    };
  });

  useEffect(() => {
    scale.value = withRepeat(withTiming(3, {duration: 60000}), -1, true);
    rotate.value = withRepeat(withTiming(1, {duration: 120000}), -1, true);
  }, []);

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.screen, aStyle]}>
        <ImageBackground
          source={require('../../../../assets/images/rome.jpg')}
          resizeMode="cover"
          style={styles.map}
        />
      </Animated.View>
      <LinearGradient
        colors={colors}
        locations={[0, 0.75, 1]}
        useAngle
        angle={315}
        style={styles.screen}
      />
    </View>
  );
};
