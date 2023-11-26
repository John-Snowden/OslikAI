import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {styles} from './styles';
import {MainButton} from '../mainButton';
import {stores} from '../../../stores/storesHolder';
import {Disconnected} from '../../../../assets/svg';

export const NotificationModal = observer(() => {
  const {notification, closeNotification} = stores.crossAppStore;

  if (!notification) return null;

  return (
    <View style={styles.screen}>
      <View style={styles.bg} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{notification}</Text>
        <Disconnected />
        <MainButton
          title="Отмена"
          style={styles.cancel}
          onPress={closeNotification}
        />
      </View>
    </View>
  );
});
