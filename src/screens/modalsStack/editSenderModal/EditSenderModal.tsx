import React from 'react';
import {Pressable, View} from 'react-native';
import {CustomInput, MainButton} from '../../components';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

export const EditSenderModal = observer(() => {
  const navigation = useNavigation();

  const {currentSender, updateSender, setSenderName, setSenderGps} =
    stores.trackStore;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={goBack} style={styles.bg} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title="имя отправителя:"
          value={currentSender?.senderName}
          onChangeText={setSenderName}
        />
        <CustomInput
          title="gps отправителя:"
          value={currentSender?.senderGps}
          onChangeText={setSenderGps}
        />
        <MainButton title="Ok" onPress={updateSender} style={styles.buttom} />
      </View>
    </View>
  );
});
