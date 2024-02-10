import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Pressable} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CustomInput, MainButton} from '../../components';

export const EditReceiverModal = observer(() => {
  const {
    currentReceiver: {name, gps},
    editReceiver,
  } = stores.routeStore;

  const [nameValue, setName] = useState(name);
  const [gpsValue, setGps] = useState(gps);

  const onPress = () => {
    editReceiver(nameValue, gpsValue);
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
          title={'Имя получателя'}
          value={nameValue}
          isLeftAligned
          onChangeText={setName}
        />
        <CustomInput
          title={'gps получателя'}
          value={gpsValue}
          keyboardType={'number-pad'}
          isLeftAligned
          onChangeText={setGps}
        />
        <MainButton title="ok" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
});
