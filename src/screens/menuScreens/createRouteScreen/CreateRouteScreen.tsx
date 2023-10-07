import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CustomInput, Header} from '../../components';
import {styles} from './styles';
import {stores} from '../../stores/storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';
import {Check} from '../../../../assets/svg/Check';
import {Add} from '../../../../assets/svg/Add';
import {IconButton} from '../../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {EModals} from '../../../constants';

export const CreateRouteScreen = () => {
  const {receivers} = stores.trackStore;

  const navigation = useNavigation();

  const goToCreateReceiverModal = () => {
    navigation.navigate('Modals', {screen: EModals.CreateReceinerModal});
  };

  const renderItem = ({item}: {item: TReceiver}) => {
    return (
      <TouchableOpacity style={styles.receiverBox}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.gps}</Text>
        </View>
        <Check />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title="Новый маршрут" />
      <View style={styles.inputsWrapper}>
        <CustomInput title="Имя отправитель" />
        <CustomInput title="gps отправителя" />
      </View>

      <View style={styles.box1}>
        <IconButton icon={<Add />} onPress={goToCreateReceiverModal} />
        <Text style={styles.title}>получатель:</Text>
      </View>
      <FlatList data={receivers} renderItem={renderItem} />
    </>
  );
};
