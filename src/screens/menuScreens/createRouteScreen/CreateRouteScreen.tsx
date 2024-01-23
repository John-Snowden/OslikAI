import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Text, View} from 'react-native';

import {EMenuScreens} from '../../../constants';
import {NavigationService} from '../../../services';

import {styles} from './styles';
import {TTask} from '../../../types';
import {Delete, Edit, Add} from '../../../../assets/svg';
import {Header, MainButton} from '../../components';
import {IconButton} from '../../components/iconButton';
import {stores} from '../../../stores';

export const CreateRouteScreen: React.FC = observer(() => {
  const {
    routeStore: {customRoute, setCurrentCustomTask, setManualRouteSave},
  } = stores;

  const addTask = () => {
    NavigationService.navigate('Modals', {screen: 'AddCustomTaskModal'});
  };
  const goToRegisterRoute = () => {
    setManualRouteSave(true);
    NavigationService.navigate(EMenuScreens.RegisterRouteScreen);
  };

  const renderItem = ({item}: {item: TTask}) => {
    const onDelete = () => {
      setCurrentCustomTask(item);
      NavigationService.navigate('Modals', {screen: 'DeleteCustomTaskModal'});
    };
    const onEdit = () => {
      setCurrentCustomTask(item);
      NavigationService.navigate('Modals', {screen: 'EditCustomTaskModal'});
    };

    const duration = (item.distance / item.speed) * 60;
    return (
      <View style={styles.fullWidth}>
        <View key={item.id} style={styles.taskWrapper}>
          <View style={styles.row}>
            <IconButton
              icon={<Delete />}
              style={styles.deleteButton}
              onPress={onDelete}
            />

            <View style={styles.content}>
              <Text style={styles.text} numberOfLines={1}>
                {item.distance} км
              </Text>
              <Text style={styles.text} numberOfLines={1}>
                {item.speed} км/ч
              </Text>
              <Text style={styles.text} numberOfLines={1}>
                {item.degree} градусов
              </Text>
            </View>

            <IconButton
              icon={<Edit />}
              onPress={onEdit}
              style={styles.buttonBox}
            />
          </View>

          <Text style={styles.createdAt}>Длительность {duration} мин</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Header title={'Новый маршрут'} isBackButton />
      <View style={styles.screen}>
        <FlatList
          data={customRoute}
          renderItem={renderItem}
          style={styles.fullWidth}
          contentContainerStyle={styles.containerStyle}
          ListFooterComponent={
            <View style={styles.addWrapper}>
              <Text style={styles.text}>Добавить походное задание</Text>
              <IconButton
                icon={<Add />}
                style={styles.addButton}
                onPress={addTask}
              />
            </View>
          }
          ListFooterComponentStyle={styles.footer}
        />

        <MainButton
          title="Сохранить маршрут"
          onPress={goToRegisterRoute}
          disabled={customRoute.length === 0}
        />
      </View>
    </>
  );
});
