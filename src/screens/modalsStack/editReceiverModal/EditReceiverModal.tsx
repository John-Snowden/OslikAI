import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput, MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';

export const EditReceiverModal = observer(() => {
  const {currentReceiver, setReceiverName, setReceiverGps, updateReceiver} =
    stores.trackStore;

  const navigation = useNavigation();

  const onPress = () => {
    updateReceiver();
    goBack();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title={'Имя получателя'}
          value={currentReceiver.name}
          onChangeText={setReceiverName}
        />
        <CustomInput
          title={'gps получателя'}
          value={currentReceiver.name}
          onChangeText={setReceiverGps}
        />
        <MainButton title="ok" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
});
