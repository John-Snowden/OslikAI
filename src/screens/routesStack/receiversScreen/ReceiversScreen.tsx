import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, FlatList, Pressable} from 'react-native';

import {TReceiver} from '$src/types';

import {styles} from './styles';
import {Card} from '../components';
import {Header} from '../../components';
import {noReceiversText} from '../../../constants';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const ReceiversScreen = observer(() => {
  const {receivers, setCurrentReceiver} = stores.routeStore;

  const noData = useMemo(() => {
    return (
      <View style={styles.noDataBox}>
        {noReceiversText.map(text => (
          <Text key={text} style={styles.text}>
            {text}
          </Text>
        ))}
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
    <View style={styles.screen}>
      <Header title={receivers.length === 0 ? 'Инструкция' : 'Получатели'} />
      <Pressable style={styles.newButton} onLongPress={goToNewModal} />
      <FlatList
        data={receivers.slice()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={noData}
      />
    </View>
  );
});
