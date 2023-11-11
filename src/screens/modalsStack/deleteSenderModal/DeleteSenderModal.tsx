import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {MainButton} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';

export const DeleteSenderModal = observer(() => {
  const {deleteReceiver} = stores.trackStore;

  const navigation = useNavigation();

  const onPress = () => {
    deleteReceiver();
    goBack();
  };

  const goBack = () => {
    navigation.goBack();
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
        <MainButton title="ok" onPress={onPress} style={styles.deleteButton} />
      </View>
    </View>
  );
});
