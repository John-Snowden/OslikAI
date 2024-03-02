import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {TTask} from '$src/types';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CustomInput, MainButton} from '../../components';

export const AddCustomTaskModal = () => {
  const {
    routeStore: {addCustomTask, validateTask},
  } = stores;

  const [task, setTask] = useState<TTask>({
    id: String(new Date().getTime()),
    distance: 0.1,
    speed: 2,
    degree: 0,
    timeout: 0,
  });

  const setDistance = (text: string) => {
    setTask(prev => {
      return {...prev, distance: Number(text.replace(',', '.'))};
    });
  };
  const setSpeed = (text: string) => {
    setTask(prev => {
      return {...prev, speed: Number(text.replace(',', '.'))};
    });
  };
  const setDegrees = (text: string) => {
    setTask(prev => {
      return {...prev, degree: Math.round(Number(text.replace(',', '.')))};
    });
  };
  const setTimeout = (text: string) => {
    setTask(prev => {
      return {...prev, timeout: Math.round(Number(text.replace(',', '.')))};
    });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const saveCustomTask = () => {
    const isTaskValid = validateTask(task);
    if (isTaskValid) {
      addCustomTask(task);
      NavigationService.goBack();
    }
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <CustomInput
            defaultValue={0.1}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDistance}
          />
          <Text style={styles.text}>дистанция в км</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={2}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setSpeed}
          />
          <Text style={styles.text}>скорость в км/ч</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={0}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setDegrees}
          />
          <Text style={styles.text}>направление в градусах</Text>
        </View>
        <View style={styles.row}>
          <CustomInput
            defaultValue={0}
            style={styles.input}
            keyboardType={'number-pad'}
            onChangeText={setTimeout}
          />
          <Text style={styles.text}>
            {'ожидание перед выполнением\nв минутах'}
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
          onPress={saveCustomTask}
          style={styles.confirmButton}
        />
      </View>
    </View>
  );
};
