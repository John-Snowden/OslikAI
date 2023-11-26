import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Add} from '../../../assets/svg/Add';
import {Header} from '../components';
import {EMenuScreens} from '../../constants';

// TODO delete screen?
export const MenuScreen = () => {
  const navigation = useNavigation();

  const goToCreateRoute = () => {
    navigation.navigate(EMenuScreens.CreateRouteScreen);
  };

  return (
    <>
      <Header title="меню" isBackButton />

      <View style={styles.screen}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToCreateRoute}>
            <Add />
            <Text style={styles.title}>Добавить маршрут</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToCreateRoute}>
            <Add />
            <Text style={styles.title}>Добавить маршрут</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToCreateRoute}>
            <Add />
            <Text style={styles.title}>Добавить маршрут</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
