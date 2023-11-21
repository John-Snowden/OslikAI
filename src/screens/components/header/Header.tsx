import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../iconButton';
import {ArrowLeft, Donkey} from '../../../../assets/svg';

interface IProps {
  title: string;
  isBackButton?: boolean;
  isMenuDisabled?: boolean;
}

export const Header: React.FC<IProps> = ({
  title,
  isBackButton,
  isMenuDisabled,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const goToSettings = () => {
    navigation.navigate('CreateRouteScreen');
  };

  // TODO mock
  const recordedRoutes = [1];

  return (
    <View style={[styles.header, styles.row]}>
      {isBackButton && (
        <View style={styles.backButton}>
          <IconButton icon={<ArrowLeft />} onPress={goBack} />
        </View>
      )}
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {!isMenuDisabled && (
        <TouchableOpacity
          onPress={goToSettings}
          disabled={recordedRoutes.length === 0}
          style={[
            styles.newRouteBox,
            recordedRoutes.length > 0 && styles.active,
          ]}>
          <View style={styles.routesBox}>
            <Text style={styles.text}>{recordedRoutes.length}</Text>
          </View>
          <Donkey size={22} />
        </TouchableOpacity>
      )}
    </View>
  );
};
