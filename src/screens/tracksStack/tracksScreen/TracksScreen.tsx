import React from 'react';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, FlatList, View, Text} from 'react-native';

import {styles} from './styles';
import {Header} from '../../components';
import {Delete, Edit} from '../../../../assets/svg';
import {stores} from '../../../stores/storesHolder';
import {IconButton} from '../../components/iconButton';
import {TSender} from '../../../types/tracks/tracksType';
import {Card} from '../components';

export const TracksScreen = observer(() => {
  const {currentReceiver, setCurrentSender} = stores.trackStore;

  const navigation = useNavigation();

  const renderItem = ({item}: {item: TSender}) => {
    const goToEditSenderModal = () => {
      setCurrentSender(item);
      navigation.push('Modals', {screen: 'EditSenderModal'});
    };

    const goToRouteOverviewScreen = () => {
      setCurrentSender(item);
      navigation.navigate('TrackOverViewScreen' as never);
    };

    const goToDeleteModal = () => {
      setCurrentSender(item);
      navigation.push('Modals', {screen: 'DeleteSenderModal'});
    };

    return (
      <Card
        data={item}
        onPress={goToRouteOverviewScreen}
        onEdit={goToEditSenderModal}
        onDelete={goToDeleteModal}
      />
    );
  };

  return (
    <>
      <Header title={'Отправители'} isBackButton />
      <FlatList
        data={currentReceiver.senders.slice()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
});
