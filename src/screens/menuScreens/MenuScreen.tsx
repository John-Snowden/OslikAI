import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {IconButton} from '../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {Add} from '../../../assets/svg/Add';
import {Header} from '../components';
import {EMenuScreens} from '../../constants';

// TODO delete screen?
export const MenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const goToCreateRoute = () => {
    navigation.navigate(EMenuScreens.CreateRouteScreen);
  };

  return (
    <>
      <Header title="меню" />

      <View style={styles.screen}>
        <View style={styles.buttonsWrapper}>
          <View style={styles.optionWrapper}>
            <IconButton onPress={goToCreateRoute} icon={<Add />} />
            <Text style={styles.title}>Добавить маршрут</Text>
          </View>
          <View style={styles.optionWrapper}>
            <IconButton onPress={goToCreateRoute} icon={<Add />} />
            <Text style={styles.title}>Добавить маршрут</Text>
          </View>
          <View style={styles.optionWrapper}>
            <IconButton onPress={goToCreateRoute} icon={<Add />} />
            <Text style={styles.title}>Добавить маршрут</Text>
          </View>
        </View>
      </View>
    </>
  );
};
