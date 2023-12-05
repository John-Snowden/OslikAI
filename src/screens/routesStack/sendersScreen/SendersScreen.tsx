import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Text, View} from 'react-native';

import {TSender} from '$src/types';

import {styles} from './styles';
import {Card} from '../components';
import {Header} from '../../components';
import {noSendersText} from '../../../constants';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const SendersScreen = observer(() => {
  const {
    routeStore: {
      currentReceiver: {senders},
      setCurrentSender,
    },
  } = stores;

  const isNoData = senders.length === 0;

  const renderItem = ({item}: {item: TSender}) => {
    const goToEditSenderModal = () => {
      setCurrentSender(item);
      NavigationService.push('Modals', {screen: 'EditSenderModal'});
    };

    const goToRouteOverviewScreen = () => {
      setCurrentSender(item);
      NavigationService.navigate('OverviewScreen' as never);
    };

    const goToDeleteModal = () => {
      setCurrentSender(item);
      NavigationService.push('Modals', {screen: 'DeleteSenderModal'});
    };

    return (
      <Card
        data={item}
        isShowDuration
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
        data={senders.slice()}
        renderItem={renderItem}
        contentContainerStyle={[styles.contentStyle, isNoData && styles.flex]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.flex}>
            <Text style={styles.text}>{noSendersText}</Text>
          </View>
        }
      />
    </>
  );
});
