import React from 'react';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, FlatList, View, Text} from 'react-native';

import {styles} from './styles';
import {Header} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {TSender} from '../../../types/tracks/tracksType';
import {IconButton} from '../../components/iconButton';
import {Delete, Edit} from '../../../../assets/svg';

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
      <TouchableOpacity
        key={item.id}
        style={styles.receiverCard}
        onPress={goToRouteOverviewScreen}
        activeOpacity={0.5}>
        <View style={styles.row}>
          <IconButton
            icon={<Edit />}
            onPress={goToEditSenderModal}
            style={styles.buttonBox}
          />

          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.gps} numberOfLines={1}>
              {item.gps}
            </Text>
          </View>
          <IconButton
            icon={<Delete />}
            style={styles.deleteButton}
            onPress={goToDeleteModal}
          />
        </View>

        <View style={styles.lastPackageBox}>
          <Text style={styles.gpsTitle}>Последняя посылка </Text>
          <Text style={styles.gpsTitle}>{item.date}:</Text>
        </View>
        <View style={styles.cardBox}>
          <Text numberOfLines={3} style={styles.gpsTitle}>
            {item.latestPackage}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.travelTime}>Длительность: {item.duration} ч</Text>
          <Text style={styles.createdAt}>Создано 10.02.2023</Text>
        </View>
      </TouchableOpacity>
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
