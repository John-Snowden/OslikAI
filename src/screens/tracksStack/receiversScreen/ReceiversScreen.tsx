import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import {Edit} from '../../../../assets/svg/Edit';
import {IconButton} from '../../components/iconButton';
import {stores} from '../../stores/storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';

export const ReceiversScreen = () => {
  const {receivers, setCurrentReceiver} = stores.trackStore;

  const navigation = useNavigation();
  const goToEditModal = () => {
    navigation.navigate('Modals', {screen: 'EditModal'});
  };

  const renderItem = ({item}: {item: TReceiver}) => {
    const goToTracksScreen = () => {
      setCurrentReceiver(item);
      navigation.navigate('Tracks', {screen: 'TracksScreen'});
    };
    return (
      <TouchableOpacity style={styles.receiverCard} onPress={goToTracksScreen}>
        <View style={[styles.row, styles.box]}>
          <View style={styles.buttonBox}>
            <IconButton icon={<Edit />} onPress={goToEditModal} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.gpsWrapper}>
          <View style={styles.gpsBox}>
            <Text style={styles.gpsTitle}>gps:</Text>
          </View>
          <Text style={styles.gps}>{item.gps}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <Header title={'Получатели'} isHideBackButton />
      <FlatList data={receivers} renderItem={renderItem} />
    </View>
  );
};
