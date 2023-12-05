import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Pressable, Text} from 'react-native';

import {styles} from './styles';
import {MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const DeleteReceiverModal = observer(() => {
  const {deleteReceiver} = stores.routeStore;

  const onPress = () => {
    deleteReceiver();
    goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Удалить получателя?</Text>
        <Text style={styles.text}>
          Вместе с получателем будут удалены все маршруты, связанные с этим
          получателем
        </Text>
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
