import React from 'react';
import {Text, View} from 'react-native';

import {stores} from '../../../stores/storesHolder';

import {styles} from './styles';

export const SaveNewRouteModal: React.FC = () => {
  const {newReceiver, newSender} = stores.trackStore;

  return (
    <View style={styles.newRouteWrapper}>
      <View style={styles.pointWrapper}>
        <Text style={styles.title}>{newReceiver.name}</Text>
        <Text style={styles.title}>{newReceiver.gps}</Text>
      </View>
      <View style={styles.verticalSep} />
      <View style={styles.pointWrapper}>
        <Text style={styles.title}>{newSender.name}</Text>
        <Text style={styles.title}>{newSender.gps}</Text>
      </View>
    </View>
  );
};
