import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft, Menu} from '../../../../assets/svg';
import {IconButton} from '../iconButton';

interface IProps {
  title: string;
  isHideBackButton?: boolean;
}

export const Header: React.FC<IProps> = ({title, isHideBackButton}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const goToSettings = () => {
    console.log('PRESsED');

    navigation.navigate('Menu');
  };

  return (
    <View style={[styles.header, styles.row]}>
      {isHideBackButton ? (
        <View style={styles.margLeft} />
      ) : (
        <IconButton icon={<ArrowLeft />} onPress={goBack} />
      )}
      <Text style={styles.title}>{title}</Text>
      <IconButton icon={<Menu />} onPress={goToSettings} />
    </View>
  );
};
