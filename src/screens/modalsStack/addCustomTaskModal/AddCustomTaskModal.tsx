import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {TTask} from '$src/types';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CustomInput, MainButton} from '../../components';

export const AddCustomTaskModal = () => {
  const {
    crossAppStore: {showNotification},
    routeStore: {addCustomTask},
  } = stores;

  const [task, setTask] = useState<TTask>({
    id: String(new Date().getTime()),
    distance: 0,
    speed: 2,
    degree: 0,
    timeout: 0,
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

  const goBack = () => {
    NavigationService.goBack();
  };

  const save = () => {
    if (Number.isInteger(task.distance) && Number.isInteger(task.speed)) {
      addCustomTask(task);
      NavigationService.goBack();
    } else showNotification('Ошибка в заполнении походного задания');
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <CustomInput
            value={task.distance ? String(task.distance) : ''}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDistance}
          />
          <Text style={styles.text}>дистанция в км</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            value={task.speed ? String(task.speed) : ''}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setSpeed}
          />
          <Text style={styles.text}>скорость в км/ч</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            value={task.degree ? String(task.degree) : ''}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDegrees}
          />
          <Text style={styles.text}>направление в градусах</Text>
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
