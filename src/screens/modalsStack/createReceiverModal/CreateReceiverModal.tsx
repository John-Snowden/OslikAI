import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const CreateReceiverModal = () => {
  const {setSenderName, setSenderGps, newRoute} = stores.trackStore;

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title={'Имя получателя'}
          value={newRoute?.senderName}
          onChangeText={setSenderName}
        />
        <CustomInput
          title={'gps получателя'}
          value={newRoute?.senderGps}
          onChangeText={setSenderGps}
        />
      </View>
    </View>
  );
};
