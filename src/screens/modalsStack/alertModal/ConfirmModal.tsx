import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const ConfirmModal = observer(() => {
  const {currentSender, currentReceiver, backSender} = stores.trackStore;

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <View style={styles.saveRouteBox}>
          <Text style={styles.text}>
            {`Ты сформировал маршрут. Сохранить его?`}
          </Text>
        </View>
        <Text style={styles.text}>
          {`Ослик поедет от точки ${currentSender.senderName} до точки ${currentReceiver.receiverName}.`}
        </Text>
        {backSender && (
          <Text style={styles.text}>
            {`После выполнения вернется на точку ${backSender.senderName}.`}
          </Text>
        )}
        <MainButton
          title="отмена"
          onPress={goBack}
          style={styles.cancelButton}
        />
        <MainButton
          title="сохранить"
          onPress={goBack}
          style={styles.confirmButton}
        />
      </View>
    </View>
  );
});
