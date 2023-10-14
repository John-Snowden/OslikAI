import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CustomInput, Header, MainButton} from '../../components';
import {styles} from './styles';
import {stores} from '../../../stores/storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';
import {Check} from '../../../../assets/svg/Check';
import {Add} from '../../../../assets/svg/Add';
import {IconButton} from '../../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {EModals} from '../../../constants';
import {observer} from 'mobx-react-lite';

export const CreateRouteScreen = observer(() => {
  const {
    receivers,
    newRoute,
    setSenderName,
    setSenderGps,
    saveNewRoute,
    setNewRouteReceiver,
  } = stores.trackStore;

  const navigation = useNavigation();

  const goToCreateReceiverModal = () => {
    navigation.navigate('Modals', {screen: EModals.CreateReceinerModal});
  };

  const renderItem = ({item}: {item: TReceiver}) => {
    const onPress = () => {
      setNewRouteReceiver(item);
    };
    return (
      <TouchableOpacity style={styles.receiverBox} onPress={onPress}>
        <View>
          <Text style={styles.title}>{item.receiverName}</Text>
          <Text style={styles.text}>{item.receiverGps}</Text>
        </View>
        <Check />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title="Новый маршрут" />
      <View style={styles.inputsWrapper}>
        <CustomInput
          title="Имя отправителя"
          value={newRoute?.senderName}
          onChangeText={setSenderName}
        />
        <CustomInput
          title="gps отправителя"
          value={newRoute?.senderGps}
          onChangeText={setSenderGps}
        />
      </View>

      <View style={styles.box1}>
        <IconButton icon={<Add />} onPress={goToCreateReceiverModal} />
        <Text style={styles.title}>получатель:</Text>
      </View>
      <FlatList data={receivers} renderItem={renderItem} />
      <MainButton
        title={'Сохранить'}
        onPress={saveNewRoute}
        style={styles.btn}
        textColor={styles.btnText}
      />
    </>
  );
});
