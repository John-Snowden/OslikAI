import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {EModals} from '../../../constants';
import {stores} from '../../../stores/storesHolder';
import {CustomInput, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {TReceiver} from '../../../types/tracks/tracksType';

export const CreateRouteScreen = observer(() => {
  const {
    receivers,
    newSender,
    setNewSenderName,
    setNewSenderGps,
    setNewReceiverName,
    setNewReceiverGps,
  } = stores.trackStore;

  const navigation = useNavigation();

  const goToCreateReceiverModal = () => {
    navigation.navigate('Modals', {screen: EModals.CreateReceinerModal});
  };

  const renderItem = ({item}: {item: TReceiver}) => {
    const onPress = () => {
      setNewReceiverName(item.name);
      setNewReceiverGps(item.gps);
    };
    return (
      <TouchableOpacity style={styles.receiverBox} onPress={onPress}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>{item.gps}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title="Новый маршрут" isBackButton />
      <View style={styles.box}>
        <Text style={styles.title}>Добавь отправителя</Text>
      </View>
      <View style={styles.inputsWrapper}>
        <CustomInput
          title="Имя отправителя"
          value={newSender.name}
          onChangeText={setNewSenderName}
        />
        <CustomInput
          title="gps отправителя"
          value={newSender.gps}
          onChangeText={setNewSenderGps}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Добавь получателя</Text>
      </View>
      <View>
        <FlatList
          data={receivers}
          ListHeaderComponent={
            <TouchableOpacity
              style={styles.newBttn}
              onPress={goToCreateReceiverModal}>
              <Text style={styles.title}>Новый получатель</Text>
              <Text style={styles.text}>***.***.***</Text>
            </TouchableOpacity>
          }
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
});
