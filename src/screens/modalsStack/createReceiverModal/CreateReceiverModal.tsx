import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {CustomInput} from '../../components';

export const CreateReceiverModal = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <CustomInput title={'Имя получателя'} value={'test name'} />
        <CustomInput title={'gps получателя'} value={'test gps 1234'} />
      </View>
    </View>
  );
};
