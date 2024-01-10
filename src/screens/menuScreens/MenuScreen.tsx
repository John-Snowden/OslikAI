import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {BackGround, Header} from '../components';
import {Add} from '../../../assets/svg/Add';
import {EMenuScreens} from '../../constants';
import {NavigationService} from '../../services';

// TODO delete screen?
export const MenuScreen = () => {
  const goToCreateRoute = () => {
    NavigationService.navigate(EMenuScreens.CreateRouteScreen);
  };

  return (
    <>
      <BackGround />
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
