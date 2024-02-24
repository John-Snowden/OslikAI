import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Pressable} from 'react-native';

import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {CustomInput, MainButton} from '../../components';
import {NavigationService} from '../../../services';

export const EditSenderModal = observer(() => {
  const {
    currentSender: {name, gps, comment},
    editSender,
  } = stores.routeStore;

  const [nameValue, setName] = useState(name);
  const [gpsValue, setGps] = useState(gps);
  const [commentText, setComment] = useState(comment);

  const onPress = () => {
    editSender(nameValue, gpsValue, commentText);
    goBack();
  };

  const editComment = (text: string) => {
    setComment(text.trim());
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.bg} onPress={goBack} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title={'Имя отправителя'}
          defaultValue={nameValue}
          isLeftAligned
          onChangeText={setName}
        />
        <CustomInput
          title={'gps отправителя'}
          defaultValue={gpsValue}
          keyboardType={'number-pad'}
          isLeftAligned
          onChangeText={setGps}
        />
        <CustomInput
          title="Комментарий"
          defaultValue={commentText}
          onChangeText={editComment}
          isLeftAligned
          inputStyle={styles.comment}
        />
        <MainButton title="Сохранить" onPress={onPress} style={styles.button} />
      </View>
    </View>
  );
});
