import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import {Edit} from '../../../../assets/svg/Edit';
import {IconButton} from '../../components/iconButton';
import {stores} from '../../../stores/storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';
import {Delete} from '../../../../assets/svg';

export const ReceiversScreen = () => {
  const {receivers, setCurrentReceiver} = stores.trackStore;

  const navigation = useNavigation();
  const goToEditModal = () => {
    navigation.push('Modals', {screen: 'EditModalReceiverModal'});
  };

  const deleteReceiver = () => {};

  const renderItem = ({item}: {item: TReceiver}) => {
    const goToTracksScreen = () => {
      setCurrentReceiver(item);
      navigation.navigate('Tracks', {screen: 'TracksScreen'});
    };

    return (
      <TouchableOpacity
        style={styles.receiverCard}
        onPress={goToTracksScreen}
        activeOpacity={0.5}>
        <View style={[styles.row, styles.box]}>
          <View style={styles.buttonBox}>
            <IconButton icon={<Edit />} onPress={goToEditModal} />
          </View>
          <View style={[styles.box, styles.margLeft]}>
            <Text style={styles.title}>
              {item.receiverName.toLocaleUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.gpsWrapper}>
            <TouchableOpacity activeOpacity={0.5} style={styles.gpsBox}>
              <Text style={styles.gpsTitle}>gps</Text>
            </TouchableOpacity>
            <Text style={styles.gps}>{item.receiverGps}</Text>
          </View>
          <IconButton
            icon={<Delete />}
            style={styles.deleteButton}
            onPress={deleteReceiver}
          />
        </View>

        <View style={styles.cardBox}>
          <View style={styles.lastPackageBox}>
            <Text style={styles.gpsTitle}>Последняя посылка </Text>
            <Text style={styles.gpsTitle}>{item.date}:</Text>
          </View>
          <View style={styles.lastPackageBox}>
            <Text numberOfLines={2} style={styles.gpsTitle}>
              {item.latestPackage ? item.latestPackage : 'нет данных'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <Header title={'Получатели'} isHideBackButton />
      <FlatList
        data={receivers}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
