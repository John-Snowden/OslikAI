import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput, MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const CreateReceiverModal = () => {
  const {setNewReceiverName, setNewReceiverGps, newRoute} = stores.trackStore;

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
          value={newRoute?.name}
          onChangeText={setNewReceiverName}
        />
        <CustomInput
          title={'gps получателя'}
          value={newRoute?.gps}
          onChangeText={setNewReceiverGps}
        />
        <MainButton title="ok" onPress={goBack} style={styles.confirmButton} />
      </View>
    </View>
  );
};
