import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, FlatList, Pressable} from 'react-native';

import {TReceiver} from '$src/types';

import {styles} from './styles';
import {Card} from '../components';
import {BackGround, Header} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import Animated from 'react-native-reanimated';

export const ReceiversScreen = observer(() => {
  const {receivers, setCurrentReceiver} = stores.routeStore;

  const isReceivers = receivers.length !== 0;

  const noData = useMemo(() => {
    return (
      <View style={styles.noDataBox}>
        <Text style={styles.text}>Маршрутов нет</Text>
      </View>
    );
  }, []);

  const renderItem = ({item}: {item: TReceiver}) => {
    const goToEditModal = () => {
      setCurrentReceiver(item);
      NavigationService.push('Modals', {screen: 'EditReceiverModal'});
    };

    const goToDeleteModal = () => {
      setCurrentReceiver(item);
      NavigationService.push('Modals', {screen: 'DeleteReceiverModal'});
    };

    const goToTracksScreen = () => {
      setCurrentReceiver(item);
      NavigationService.push('RoutesStack', {screen: 'SendersScreen'});
    };

    return (
      <Card
        data={item}
        onPress={goToTracksScreen}
        onEdit={goToEditModal}
        onDelete={goToDeleteModal}
      />
    );
  };

  const goToNewModal = () => {
    NavigationService.push('Modals', {screen: 'NewModal'});
  };

  return (
    <>
      <BackGround />
      <View style={styles.screen}>
        <Animated.View style={[styles.bgAnimation]}></Animated.View>
        <Header title={isReceivers ? 'Точка получения' : 'Инструкция'} />
        {isReceivers && (
          <View style={styles.titleBox}>
            <Text style={styles.text}>Выбери, куда отправляешь</Text>
          </View>
        )}
        <FlatList
          data={receivers.slice()}
          renderItem={renderItem}
          contentContainerStyle={[
            styles.contentStyle,
            !isReceivers && styles.noDataBox,
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={noData}
        />
        <Pressable style={styles.newButton} onLongPress={goToNewModal} />
      </View>
    </>
  );
});
