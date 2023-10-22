import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput, MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';

export const EditModalReceiverModal = observer(() => {
  const {currentReceiver, setReceiverName, setReceiverGps, updateReceiver} =
    stores.trackStore;

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
        <MainButton title="ok" onPress={updateReceiver} />
      </View>
    </View>
  );
});
