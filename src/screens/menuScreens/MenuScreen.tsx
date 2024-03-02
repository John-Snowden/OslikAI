import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {BackGround, Header} from '../components';
import {Joystick, Instructions, CompileRoute} from '../../../assets/svg';
import {EMenuScreens} from '../../constants';
import {NavigationService} from '../../services';
import {TelegramIcon} from '../../../assets/svg/Telegram';
import {stores} from '../../stores';

export const MenuScreen = () => {
  const {serverFile} = stores.fsStore;

  const goToSaveRecordedRoute = () => {
    if (serverFile.routes.length === 0) return;
    NavigationService.navigate(EMenuScreens.NameRouteScreen);
  };

  const goToAddCustomTaskModal = () => {
    NavigationService.navigate(EMenuScreens.CreateCustomRouteScreen);
  };

  const goToInstructionsScreen = () => {
    NavigationService.navigate(EMenuScreens.InstructionsScreen);
  };

  const goToFeedbackScreen = () => {
    NavigationService.navigate(EMenuScreens.FeedbackScreen);
  };

  return (
    <>
      <BackGround />
      <Header title="Меню" isBackButton isMenuButton={false} />

      <View style={styles.screen}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={[styles.optionWrapper, styles.row]}
            onPress={goToSaveRecordedRoute}>
            <Joystick size={18} />
            <Text style={styles.title}>Записанные маршруты</Text>
            <Text style={styles.title}>({serverFile.routes.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToAddCustomTaskModal}>
            <CompileRoute size={18} />
            <Text style={styles.title}>Собрать маршрут вручную</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToInstructionsScreen}>
            <Instructions size={18} />
            <Text style={styles.title}>Инструкция</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionWrapper}
            onPress={goToFeedbackScreen}>
            <TelegramIcon size={19} />
            <Text style={styles.title}>Обратная связь</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.versionBox}>
        <Text style={[styles.title, styles.grey]}>v. 1.1</Text>
      </View>
    </>
  );
};
