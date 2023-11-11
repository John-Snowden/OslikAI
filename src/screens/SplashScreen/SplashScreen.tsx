import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Donkey} from '../../../assets/svg';

import {offsetX, styles} from './styles';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  const progressAllLogo = useSharedValue(0);
  const progress = useSharedValue(0);

  const aStyleOslik = useAnimatedStyle(() => {
    const opacity = interpolate(progressAllLogo.value, [0, 1], [0, 1]);
    const translateY = interpolate(progressAllLogo.value, [0, 1], [100, 0]);
    return {opacity, transform: [{translateY}]};
  });

  const aStyleA = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [1, 0]);
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, offsetX],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{translateX}]};
  });

  const aStyleB = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1]);
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [offsetX, 16],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{translateX}]};
  });

  useEffect(() => {
    progressAllLogo.value = withTiming(1, {duration: 500}, () => {
      progress.value = withDelay(500, withTiming(1, {duration: 500}));
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tracks');
    }, 2500);
  }, []);

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.oslik, aStyleOslik]}>
        <View style={styles.wheelBox}>
          <View style={styles.wheel} />
          <View style={styles.wheel} />
        </View>
        <View style={styles.oslikBody}>
          <View style={styles.iconWrapper}>
            <Donkey />
          </View>
        </View>
        <View style={styles.wheelBox}>
          <View style={styles.wheel} />
          <View style={styles.wheel} />
        </View>
      </Animated.View>

      <View>
        <Animated.Text style={[styles.title, aStyleA]}>ИА</Animated.Text>
        <Animated.Text style={[styles.title, styles.absolute, aStyleB]}>
          AI
        </Animated.Text>
      </View>
    </View>
  );
};
