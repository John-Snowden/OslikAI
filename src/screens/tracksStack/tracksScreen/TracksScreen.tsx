import {TouchableOpacity, FlatList, View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Header} from '../../components';

export const TracksScreen = () => {
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
      time: string;
    };
  }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={goToTrackScreen}>
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
            <Text style={styles.gps}>{item.time}ч</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Header title={'Маршруты'} />
      {/* <TouchableOpacity style={styles.receiverCard} onPress={goToTrackScreen} /> */}
      <FlatList data={mockData} renderItem={renderItem} />
    </>
  );
};

// TODO
const mockData = [
  {
    title: 'Склад-Кабан',
    gpsA: '1341.243456.786',
    gpsB: '3134.2435.256.23.6',
    date: '21.03.23',
    img1: 'https://static.tildacdn.com/tild3639-3835-4334-b764-306266326237/dem3.jpg',
    img2: 'https://topogis.ru/wp-content/uploads/2019/01/04.jpg',
    time: '01.15',
  },
  {
    title: 'База-Кабан',
    gpsA: '876.98.234',
    gpsB: '14.65.3456.7654.3',
    date: '12.02.23',
    img1: 'https://static.tildacdn.com/tild3639-3835-4334-b764-306266326237/dem3.jpg',
    img2: 'https://fsd.videouroki.net/products/conspekty/geo6/10-znachieniie-planov-miestnosti-i-ghieoghrafichieskikh-kart.files/image001.jpg',
    time: '00.50',
  },
  {
    title: 'Кабан',
    gpsA: '3456.87654.08',
    gpsB: '234.43.1345.677.8',
    date: '01.012.23',
    img1: 'https://de-ussr.com/uploads/images/t1/t1_019.jpg',
    img2: 'https://i0.wp.com/s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/26004027049/original/5pOa4AH2jMebWiIGciFMO2smx5-Aqje56w.png',
    time: '02.10',
  },
];
