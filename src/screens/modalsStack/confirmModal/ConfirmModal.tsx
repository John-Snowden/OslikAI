import {observer} from 'mobx-react-lite';
import React, {useCallback, useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CustomInput, MainButton} from '../../components';

export const ConfirmModal = observer(() => {
  const {
    routeStore: {
      currentSender,
      currentReceiver,
      backReceiverIndex,
      updatePendingRoutes,
      savePendingRoutes,
      setBackReceiverIndex,
    },
    crossAppStore: {showNotification},
  } = stores;

  const [timeouts, setTimeouts] = useState([0, 0]);
  const [speeds, setSpeeds] = useState([2, 2]);

  const goBack = () => {
    setBackReceiverIndex(-1);
    updatePendingRoutes();
    NavigationService.goBack();
  };

  const save = () => {
    savePendingRoutes(timeouts, speeds);
    showNotification(
      'Маршрут сохранен.\n\nЧтобы передать маршрут на Ослика,\n подключись к нему по usb и дождись,\nкогда Ослик скачает маршрут.',
    );
    NavigationService.navigate('RoutesStack', {screen: 'ReceiversScreen'});
  };

  const renderTimeoutInputs = useCallback(() => {
    return [1, 2].map((_, i) => {
      const changeTimeouts = (t: string) =>
        setTimeouts(timeouts.splice(i, 1, Number(t)));

      const changeSpeeds = (s: string) =>
        setTimeouts(speeds.splice(i, 1, Number(s)));

      return (
        <View key={i} style={styles.inputGroup}>
          <View style={styles.row}>
            <CustomInput
              value={String(timeouts[i])}
              style={styles.input}
              keyboardType={'number-pad'}
              onChangeText={changeTimeouts}
            />
            <Text style={styles.text}>{` минут с точки ${
              i === 0 ? currentSender.name : currentReceiver?.name
            }`}</Text>
          </View>
          <View key={i} style={styles.row}>
            <CustomInput
              value={String(speeds[i])}
              style={styles.input}
              keyboardType={'number-pad'}
              onChangeText={changeSpeeds}
            />
            <Text style={styles.text}>{` км/ч`}</Text>
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
            {`Ослик поедет от точки ${currentSender.name} до точки ${currentReceiver.name}.\nИ вернется на точку ${currentReceiver.senders[backReceiverIndex].name}`}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {`Если нужно, добавь таймер и среднюю скорость для каждого маршрута. Перед выдвижением Ослик простоит указанное количество времени.`}
          </Text>
        </View>
        <View style={styles.inputsBox}>{renderTimeoutInputs()}</View>
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
