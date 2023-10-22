import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const EditModalReceiverModal = () => {
  const {currentReceiver, setReceiverName, setReceiverGps} = stores.trackStore;

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
          value={currentReceiver?.receiverName}
          onChangeText={setReceiverName}
        />
        <CustomInput
          title={'gps получателя'}
          value={currentReceiver?.receiverGps}
          onChangeText={setReceiverGps}
        />
      </View>
    </View>
  );
};
