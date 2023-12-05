import React from 'react';
import {observer} from 'mobx-react-lite';
import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';

export const NotificationModal = observer(() => {
  const {notification, closeNotification} = stores.crossAppStore;

  if (!notification) return null;

  return (
    <View style={styles.screen}>
      <Pressable style={styles.bg} onPress={closeNotification} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{notification}</Text>
      </View>
    </View>
  );
});
