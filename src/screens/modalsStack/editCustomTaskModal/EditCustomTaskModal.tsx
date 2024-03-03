import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {TTask} from '$src/types';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService, navigationRef} from '../../../services';
import {CustomInput, MainButton} from '../../components';

export const EditCustomTaskModal = () => {
  const {
    routeStore: {editCustomTask},
  } = stores;

  const item = {
    ...(navigationRef.getCurrentRoute()?.params as {item: TTask})?.item,
  };

  const [task, setTask] = useState<TTask>({
    id: String(new Date().getTime()),
    distance: item.distance,
    speed: item.speed,
    degree: item.degree,
    timeout: item.timeout,
  });

  const setDistance = (text: string) => {
    setTask(prev => {
      return {...prev, distance: Number(text)};
    });
  };
  const setSpeed = (text: string) => {
    setTask(prev => {
      return {...prev, speed: Number(text)};
    });
  };
  const setDegrees = (text: string) => {
    setTask(prev => {
      return {...prev, degree: Number(text)};
    });
  };
  const setTaskTimeout = (text: string) => {
    setTask(prev => {
      return {...prev, timeout: Number(text)};
    });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const save = () => {
    editCustomTask(task);
    NavigationService.goBack();
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <CustomInput
            defaultValue={item.distance}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDistance}
          />
          <Text style={styles.text}>дистанция в км</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={item.speed}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setSpeed}
          />
          <Text style={styles.text}>скорость в км/ч</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={item.degree}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDegrees}
          />
          <Text style={styles.text}>направление в градусах</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={item.timeout}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setTaskTimeout}
          />
          <Text style={styles.text} numberOfLines={2}>
            таймаут перед выполнением в минутах
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
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
};
