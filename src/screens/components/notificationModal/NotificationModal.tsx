import React from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, ActivityIndicator} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {Themes} from '../../../../Theme';
import {MainButton} from '../mainButton';

export const NotificationModal = observer(() => {
  const {notification, closeNotification} = stores.crossAppStore;

  if (!notification) return null;

  return (
    <View style={styles.screen}>
      <View style={styles.bg} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{notification}</Text>
        <ActivityIndicator color={Themes.white} />
        <MainButton
          title="Отмена"
          style={styles.cancel}
          onPress={closeNotification}
        />
      </View>
    </View>
  );
});
