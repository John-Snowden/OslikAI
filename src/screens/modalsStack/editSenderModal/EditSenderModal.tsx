import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Pressable} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {CustomInput, MainButton} from '../../components';
import {NavigationService} from '../../../services';

export const EditSenderModal = observer(() => {
  const {
    currentSender: {name, gps},
    editSender,
  } = stores.routeStore;

  const [nameValue, setName] = useState(name);
  const [gpsValue, setGps] = useState(gps);

  const onPress = () => {
    editSender(nameValue, gpsValue);
    goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title={'Имя отправителя'}
          value={nameValue}
          onChangeText={setName}
        />
        <CustomInput
          title={'gps отправителя'}
          value={gpsValue}
          keyboardType={'number-pad'}
          onChangeText={setGps}
        />
        <MainButton title="Сохранить" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
});
