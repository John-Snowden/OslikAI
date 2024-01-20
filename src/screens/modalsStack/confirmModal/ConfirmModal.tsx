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
      writePendingRoutes,
      setBackReceiverIndex,
    },
    crossAppStore: {showNotification},
  } = stores;

  const [timeouts, setTimeouts] = useState<number[]>([0, 0]);
  const [speeds, setSpeeds] = useState<number[]>([2, 2]);

  const goBack = () => {
    updatePendingRoutes();
    NavigationService.goBack();
  };

  const save = () => {
    writePendingRoutes(timeouts, speeds);
    showNotification(
      'Маршрут сохранен.\nПодключись к Ослику и дождись сообщения, что Ослик получил маршрут.',
    );
    NavigationService.reset('RoutesStack');
  };

  const renderInputs = () => {
    const changeTimeoutA = (timeout: string) => {
      setTimeouts([Number(timeout), timeouts[1]]);
    };
    const changeTimeoutB = (timeout: string) => {
      setTimeouts([timeouts[0], Number(timeout)]);
    };

    const changeSpeedA = (speed: string) => {
      setSpeeds([Number(speed), speeds[1]]);
    };
    const changeSpeedB = (speed: string) => {
      setSpeeds([speeds[0], Number(speed)]);
    };

    return (
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <CustomInput
            value={String(timeouts[0])}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeTimeoutA}
          />
          <Text
            style={styles.text}>{` минут с точки ${currentSender.name}`}</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            value={String(speeds[0])}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeSpeedA}
          />
          <Text style={styles.text}>{` км/ч`}</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            value={String(timeouts[1])}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeTimeoutB}
          />
          <Text
            style={
              styles.text
            }>{` минут с точки ${currentReceiver?.name}`}</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            value={String(speeds[1])}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeSpeedB}
          />
          <Text style={styles.text}>{` км/ч`}</Text>
        </View>
      </View>
    );
  };

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
        <View style={styles.inputsBox}>{renderInputs()}</View>
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
