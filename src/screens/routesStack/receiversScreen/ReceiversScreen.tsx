import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, FlatList, Pressable, TouchableOpacity} from 'react-native';

import {TReceiver} from '$src/types';

import {styles} from './styles';
import {Card} from '../components';
import {BackGround, Header} from '../../components';
import {EMenuScreens} from '../../../constants';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {CompileRoute} from '../../../../assets/svg';

export const ReceiversScreen = observer(() => {
  const {receivers, setCurrentReceiver} = stores.routeStore;

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

  const addRoute = () => {
    NavigationService.navigate(EMenuScreens.CreateCustomRouteScreen);
  };

  return (
    <>
      <BackGround />
      <View style={styles.screen}>
        <Header
          title={receivers.length === 0 ? 'Инструкция' : 'Точка получения'}
        />
        <Pressable style={styles.newButton} onLongPress={goToNewModal} />
        <FlatList
          data={receivers.slice()}
          renderItem={renderItem}
          contentContainerStyle={[
            styles.contentStyle,
            receivers.length === 0 && styles.noDataBox,
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={noData}
        />
        <TouchableOpacity style={styles.addRoute} onPress={addRoute}>
          <Text style={styles.text}>Собрать маршрут</Text>
          <View style={styles.addRouteBox}>
            <CompileRoute size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
});
