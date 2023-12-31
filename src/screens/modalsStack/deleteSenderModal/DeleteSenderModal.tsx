import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Pressable, Text} from 'react-native';

import {styles} from './styles';
import {MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const DeleteSenderModal = observer(() => {
  const {deleteSender} = stores.routeStore;

  const onPress = () => {
    deleteSender();
    goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Удалить этого отправителя?</Text>
        <MainButton
          title="отмена"
          onPress={goBack}
          style={styles.cancelButton}
        />
        <MainButton
          title="удалить"
          onPress={onPress}
          style={styles.deleteButton}
        />
      </View>
    </View>
  );
});
