import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Delete, Edit, Point} from '../../../../../assets/svg';
import {MainButton} from '../../../../screens/components';
import {NavigationService} from '../../../../services';
import {TTask} from '../../../../types';
import {IconButton} from '../../../../screens/components/iconButton';
import {stores} from '../../../../stores';

interface IProps {
  onSave: () => void;
}

export const EditSenderRouteComponent: React.FC<IProps> = observer(
  ({onSave}) => {
    const {
      routeStore: {customRoute, setCurrentCustomTask},
    } = stores;

    const addTask = () => {
      NavigationService.navigate('Modals', {screen: 'AddCustomTaskModal'});
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

      const duration = (item.distance / item.speed) * 60 + item.timeout;
      const durationToFixed =
        Math.round(duration) === 0 ? '< 1' : duration.toFixed();

      return (
        <View key={item.id} style={styles.taskWrapper}>
          <Image
            source={require('../../../../../assets/images/noise.png')}
            style={styles.noise}
          />
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
      );
    };

    return (
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
          onPress={onSave}
          disabled={customRoute.length === 0}
        />
      </View>
    );
  },
);
