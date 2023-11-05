import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, FlatList, View, Text, Image} from 'react-native';

import {styles} from './styles';
import {Header} from '../../components';
import {stores} from '../../../stores/storesHolder';
import {TRoute} from '../../../types/tracks/tracksType';
import {Add} from '../../../../assets/svg/Add';
import {IconButton} from '../../components/iconButton';

export const TracksScreen = observer(() => {
  const {currentReceiver, setCurrentSender} = stores.trackStore;

  const navigation = useNavigation();
  const goToTrackScreen = () => {
    navigation.navigate('TrackOverViewScreen' as never);
  };

  const renderItem = ({item}: {item: TRoute}) => {
    const goToEditSenderModal = () => {
      setCurrentSender(item);
      navigation.push('Modals', {screen: 'EditSenderModal'});
    };

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={goToTrackScreen}
        activeOpacity={0.5}>
        <View>
          <View style={styles.addButtom}>
            <Text style={styles.title}>{item.senderName}</Text>
            <IconButton icon={<Add />} onPress={goToEditSenderModal} />
          </View>
          <View style={styles.imageBox}>
            <Image source={{uri: item.img1}} style={styles.image} />
            <Image source={{uri: item.img2}} style={styles.image} />
          </View>
          <View style={styles.date}>
            <Text style={styles.gps}>gps: {item.senderGps}</Text>
            <Text style={styles.gps}>gps: {currentReceiver?.receiverGps}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.gps}>{item.date}</Text>
            <Text style={styles.gps}>{item.duration}ч</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!currentReceiver) return null;

  return (
    <>
      <Header title={'Маршруты'} />
      <FlatList
        data={currentReceiver.routes}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
});
