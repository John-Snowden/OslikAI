import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput, MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const ConfirmModal = observer(() => {
  const {currentSender, currentReceiver, backReceiver, savePendingRoutes} =
    stores.trackStore;

  const navigation = useNavigation();

  const [timeouts, setTimeouts] = useState([0, 0]);

  const goBack = () => {
    navigation.goBack();
  };

  const save = () => {
    savePendingRoutes(timeouts);
    navigation.navigate('Tracks', {screen: 'ReceiversScreen'});
  };

  const renderTimeoutInputs = useCallback(() => {
    return [1, 2].map((_, i) => {
      return (
        <View key={i} style={styles.row}>
          <CustomInput
            key={i}
            value={String(timeouts[i])}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={t => setTimeouts(timeouts.splice(i, 1, Number(t)))}
          />
          <View style={styles.minsText}>
            <Text style={styles.text}>{` минут с точки ${
              i === 0 ? currentSender.name : currentReceiver?.name
            }`}</Text>
          </View>
        </View>
      );
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <View style={styles.saveRouteBox}>
          <Text style={styles.text}>
            {`Ты сформировал маршрут. Теперь надо сохранить.\n`}
            {`Ослик поедет от точки ${currentSender.name} до точки ${currentReceiver.name}.`}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {`Если нужно, добавь таймер перед каждым маршрутом. Перед выдвижением Ослик простоит указанное количество времени.`}
          </Text>
        </View>
        <View style={styles.inputsBox}>{renderTimeoutInputs()}</View>
        {backReceiver && (
          <Text style={styles.text}>
            {`После выполнения вернется на точку ${backReceiver.name}.`}
          </Text>
        )}
        <MainButton
          title="отмена"
          onPress={goBack}
          style={styles.cancelButton}
        />
        <MainButton
          title="сохранить"
          onPress={save}
          style={styles.confirmButton}
        />
      </View>
    </View>
  );
});
