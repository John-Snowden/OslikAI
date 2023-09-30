import React from 'react';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, FlatList, View, Text, Image} from 'react-native';

import {styles} from './styles';
import {Header} from '../../components';
import {stores} from '../../stores/storesHolder';

export const TracksScreen = observer(() => {
  const {tracks} = stores.trackStore;
  const navigation = useNavigation();
  const goToTrackScreen = () => {
    navigation.navigate('TrackOverViewScreen' as never);
  };

  const renderItem = ({
    item,
  }: {
    item: {
      title: string;
      gpsA: string;
      gpsB: string;
      date: string;
      img1: string;
      img2: string;
      duration: string;
    };
  }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={goToTrackScreen}
        activeOpacity={0.5}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.imageBox}>
            <Image source={{uri: item.img1}} style={styles.image} />
            <Image source={{uri: item.img2}} style={styles.image} />
          </View>
          <View style={styles.date}>
            <Text style={styles.gps}>gps: {item.gpsA}</Text>
            <Text style={styles.gps}>gps: {item.gpsB}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.gps}>{item.date}</Text>
            <Text style={styles.gps}>{item.duration}ч</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={'Маршруты'} />
      <FlatList
        data={tracks}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
});
