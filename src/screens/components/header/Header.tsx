import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '../../../../assets/svg';
import {IconButton} from '../iconButton';
import {Add} from '../../../../assets/svg/Add';
import {Themes} from '../../../../Theme';

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
    navigation.navigate('Menu');
  };

  // TODO mock
  const recordedRoutes = 1;

  return (
    <View style={[styles.header, styles.row]}>
      {isHideBackButton && (
        <View style={styles.backButton}>
          <IconButton icon={<ArrowLeft />} onPress={goBack} />
        </View>
      )}
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={goToSettings}
        disabled={!recordedRoutes}
        style={[styles.newRouteBox, recordedRoutes > 0 && styles.active]}>
        <View style={styles.routesBox}>
          {Number.isInteger(recordedRoutes) ? (
            <Text style={styles.text}>{recordedRoutes}</Text>
          ) : (
            <ActivityIndicator color={Themes.white} />
          )}
        </View>
        <Add />
      </TouchableOpacity>
    </View>
  );
};
