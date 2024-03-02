import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Text, View} from 'react-native';

import {TSender} from '$src/types';

import {styles} from './styles';
import {Card} from '../components';
import {BackGround, Header} from '../../components';
import {noSendersText} from '../../../constants';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const SendersScreen = observer(() => {
  const {
    routeStore: {
      currentReceiver,
      currentReceiver: {senders},
      setCurrentSender,
    },
  } = stores;

  const isSenders = senders.length !== 0;

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
      <BackGround />
      <Header title={'Точка отправления'} isBackButton />
      {isSenders && (
        <View style={styles.titleBox}>
          <Text style={styles.text}>
            Выбери отправителя для {currentReceiver.name}
          </Text>
        </View>
      )}
      <FlatList
        data={senders.slice()}
        renderItem={renderItem}
        contentContainerStyle={[styles.contentStyle, !isSenders && styles.flex]}
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
