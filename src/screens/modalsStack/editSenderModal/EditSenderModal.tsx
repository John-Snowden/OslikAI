import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput, MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';

export const EditSenderModal = observer(() => {
  const {currentSender, setSenderName, setSenderGps, updateSender} =
    stores.trackStore;

  const navigation = useNavigation();

  const onPress = () => {
    updateSender();
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
          title={'Имя отправителя'}
          value={currentSender.name}
          onChangeText={setSenderName}
        />
        <CustomInput
          title={'gps отправителя'}
          value={currentSender.gps}
          onChangeText={setSenderGps}
        />
        <MainButton title="ok" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
});
