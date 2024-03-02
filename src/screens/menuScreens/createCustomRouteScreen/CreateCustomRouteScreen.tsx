import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {EMenuScreens} from '../../../constants';
import {NavigationService} from '../../../services';

import {styles} from './styles';
import {TTask} from '../../../types';
import {Delete, Edit, Point} from '../../../../assets/svg';
import {Header, MainButton} from '../../components';
import {IconButton} from '../../components/iconButton';
import {stores} from '../../../stores';

export const CreateCustomRouteScreen: React.FC = observer(() => {
  const {
    routeStore: {customRoute, setCurrentCustomTask, setManualRouteSave},
  } = stores;

  const addTask = () => {
    NavigationService.navigate('Modals', {screen: 'AddCustomTaskModal'});
  };
  const goToRegisterRoute = () => {
    setManualRouteSave(true);
    NavigationService.navigate(EMenuScreens.NameRouteScreen);
  };

  const renderItem = ({item}: {item: TTask}) => {
    const onDelete = () => {
      setCurrentCustomTask(item);
      NavigationService.navigate('Modals', {screen: 'DeleteCustomTaskModal'});
    };
    const onEdit = () => {
      setCurrentCustomTask(item);
      NavigationService.navigate('Modals', {
        screen: 'EditCustomTaskModal',
        item,
      });
    };

    const duration = (item.distance / item.speed) * 60;
    const durationToFixed = Math.round(duration) === 0 ? '< 1' : duration;

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
              <Text style={styles.text}>{item.distance} км</Text>
              <Text style={styles.text}>{item.speed} км/ч</Text>
              <Text style={styles.text}>{item.degree} град.</Text>
              <Text style={styles.text}>{item.timeout} мин</Text>
            </View>

            <IconButton
              icon={<Edit />}
              onPress={onEdit}
              style={styles.buttonBox}
            />
          </View>

          <Text style={styles.createdAt}>
            Время выполнения {durationToFixed} мин
          </Text>
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
            <TouchableOpacity onPress={addTask} style={styles.addWrapper}>
              <Text style={styles.text}>Добавить задачу</Text>
              <View style={styles.flagButton}>
                <Point size={20} />
              </View>
            </TouchableOpacity>
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
