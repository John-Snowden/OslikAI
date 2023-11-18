import React from 'react';
import {observer} from 'mobx-react-lite';
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
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>{item.gps}</Text>
        </View>
        {/* <Check /> */}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title="Новый маршрут" isBackButton />
      <View style={styles.inputsWrapper}>
        <CustomInput
          title="Имя отправителя"
          value={newRoute?.name}
          onChangeText={setSenderName}
        />
        <CustomInput
          title="gps отправителя"
          value={newRoute?.gps}
          onChangeText={setSenderGps}
        />
      </View>

      <View style={styles.box1}>
        <IconButton icon={<Add />} onPress={goToCreateReceiverModal} />
        <Text style={styles.title}>получатель:</Text>
      </View>
      <FlatList
        data={receivers}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <MainButton
        title={'Сохранить'}
        onPress={saveNewRoute}
        style={styles.btn}
        textColor={styles.btnText}
      />
    </>
  );
});
