import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CustomInput, MainButton} from '../../components';
import {TTask} from '$src/types';

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

  const [timeouts, setTimeouts] = useState<number[]>([
    currentSender.route[0].timeout,
    0,
  ]);
  const [speedRates, setSpeedRates] = useState<number[]>([1, 1]);

  const isReverseRoute = backReceiverIndex !== -1;

  const calculateModifiedRouteDuration = (
    route: TTask[],
    timeout: number,
    speedRate: number,
  ) => {
    const basicRouteDuration = route.reduce((sum, current) => {
      return (
        sum +
        (current.distance / (current.speed * speedRate)) * 60 +
        current.timeout
      );
    }, 0);
    const modifiedRouteDuration =
      basicRouteDuration - route[0].timeout + timeout;
    const isNumberOrFloat = /^-?\d+(\.\d+)?$/.test(
      modifiedRouteDuration.toString(),
    );
    return isNumberOrFloat ? modifiedRouteDuration.toFixed() + ' мин' : '...';
  };

  const goBack = () => {
    updatePendingRoutes();
    setBackReceiverIndex(-1);
    NavigationService.goBack();
  };

  const save = () => {
    writePendingRoutes(timeouts, speedRates);
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
      setSpeedRates([Number(speed.replace(',', '.')), speedRates[1]]);
    };
    const changeSpeedB = (speed: string) => {
      setSpeedRates([speedRates[0], Number(speed.replace(',', '.'))]);
    };

    return (
      <View style={styles.inputGroup}>
        <View style={styles.routeBox}>
          <Text
            style={
              styles.text
            }>{`${currentSender.name} - ${currentReceiver.name}`}</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={currentSender.route[0].timeout}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeTimeoutA}
          />
          <Text
            style={
              styles.text
            }>{`минут ожидания с точки ${currentSender.name}`}</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={speedRates[0]}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={changeSpeedA}
          />
          <Text
            style={
              styles.text
            }>{`коэффициент ускорения.\nЭтот маршрурт займет ${calculateModifiedRouteDuration(
            currentSender.route,
            timeouts[0],
            speedRates[0],
          )}`}</Text>
        </View>
        {isReverseRoute && (
          <>
            <View style={styles.sep} />
            <View style={styles.routeBox}>
              <Text
                style={
                  styles.text
                }>{`${currentReceiver.name} - ${currentSender.name}`}</Text>
            </View>
            <View style={styles.row}>
              <CustomInput
                defaultValue={timeouts[1]}
                style={styles.input}
                keyboardType={'number-pad'}
                onChangeText={changeTimeoutB}
              />
              <Text
                style={
                  styles.text
                }>{`минут ожидания с точки ${currentReceiver.name}`}</Text>
            </View>
            <View style={styles.row}>
              <CustomInput
                defaultValue={speedRates[1]}
                style={styles.input}
                keyboardType={'number-pad'}
                onChangeText={changeSpeedB}
              />
              <Text
                style={
                  styles.text
                }>{`коэффициент ускорения.\nЭтот маршрурт займет ${calculateModifiedRouteDuration(
                currentReceiver.senders[backReceiverIndex].route,
                timeouts[1],
                speedRates[1],
              )}`}</Text>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <View style={styles.saveRouteBox}></View>
        <View style={styles.saveRouteBox}>
          <Text style={styles.text}>
            {`Можешь изменить ${
              isReverseRoute ? 'таймеры' : 'таймер'
            } ожидания. Перед выдвижением Ослик простоит указанное количество времени.`}
            {`\n\nТакже можно ускорить или замедлить прохождение маршрута. Используй коэффициент.`}
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
