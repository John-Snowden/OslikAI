import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';
import {MainButton} from '../mainButton';
import {stores} from '../../../stores/storesHolder';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const NotificationModal = observer(() => {
  const {notification, closeNotification} = stores.crossAppStore;

  const progress = useSharedValue(0);

  const aStyle = useAnimatedStyle(() => {
    return {opacity: progress.value};
  });

  useEffect(() => {
    progress.value = withTiming(notification ? 1 : 0, {duration: 200});
  }, [notification]);

  if (!notification) return null;

  return (
    <Animated.View style={[styles.screen, aStyle]}>
      <Pressable style={styles.bg} onPress={closeNotification} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{notification}</Text>
        <MainButton
          title="Понятно"
          style={styles.button}
          onPress={closeNotification}
        />
      </View>
    </Animated.View>
  );
});
