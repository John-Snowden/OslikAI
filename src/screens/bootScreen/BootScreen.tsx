import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {View} from 'react-native';
import React, {useEffect} from 'react';

import {Donkey} from '../../../assets/svg';

import {Themes} from '../../../Theme';
import {offsetX, styles} from './styles';
import {stores} from '../../stores';

export const BootScreen: React.FC = () => {
  const {loadApp} = stores.crossAppStore;

  const carProgress = useSharedValue(0);
  const titleProgress = useSharedValue(0);

  const aStyleOslik = useAnimatedStyle(() => {
    const opacity = interpolate(carProgress.value, [0, 1], [0, 1]);
    const translateY = interpolate(carProgress.value, [0, 1], [60, 0]);

    return {opacity, transform: [{translateY}]};
  });

  const aStyleWheel = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      carProgress.value,
      [0, 0.4, 1],
      [Themes.red, 'coral', Themes.white],
    );
    return {backgroundColor};
  });

  const aStyleA = useAnimatedStyle(() => {
    const opacity = interpolate(titleProgress.value, [0, 1], [1, 0]);
    const translateX = interpolate(
      titleProgress.value,
      [0, 1],
      [0, offsetX],
      Extrapolate.CLAMP,
    );

    return {opacity, transform: [{translateX}]};
  });

  const aStyleB = useAnimatedStyle(() => {
    const opacity = interpolate(titleProgress.value, [0, 1], [0, 1]);
    const translateX = interpolate(
      titleProgress.value,
      [0, 1],
      [offsetX, 16],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{translateX}]};
  });

  useEffect(() => {
    loadApp();
    carProgress.value = withDelay(
      200,
      withTiming(1, {duration: 600}, () => {
        titleProgress.value = withDelay(100, withTiming(1, {duration: 400}));
      }),
    );
  }, []);

  return (
    <>
      <View style={styles.screen}>
        <Animated.View style={[styles.oslik, aStyleOslik]}>
          <View style={styles.wheelBox}>
            <Animated.View style={[styles.wheel, aStyleWheel]} />
            <Animated.View style={[styles.wheel, aStyleWheel]} />
          </View>
          <View style={styles.oslikBody}>
            <View style={styles.iconWrapper}>
              <Donkey size={70} />
            </View>
          </View>
          <View style={styles.wheelBox}>
            <Animated.View style={[styles.wheel, aStyleWheel]} />
            <Animated.View style={[styles.wheel, aStyleWheel]} />
          </View>
        </Animated.View>

        <View>
          <Animated.Text style={[styles.title, aStyleA]}>ИА</Animated.Text>
          <Animated.Text style={[styles.title, styles.absolute, aStyleB]}>
            AI
          </Animated.Text>
        </View>
      </View>
    </>
  );
};
