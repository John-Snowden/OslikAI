import {Pressable, Text, View} from 'react-native';
import {CustomInput, MainButton} from '../../components';
import {styles} from './styles';
import {IconButton} from '../../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {stores} from '../../../stores/storesHolder';

export const EditSenderModal = () => {
  const navigation = useNavigation();

  const {currentSender} = stores.trackStore;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={goBack} style={styles.bg} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title="имя отправителя:"
          value={currentSender?.senderName}
          onChangeText={() => {}}
        />
        <CustomInput
          title="gps отправителя:"
          value={currentSender?.senderGps}
          onChangeText={() => {}}
        />
        <MainButton title="Ok" onPress={() => {}} style={styles.buttom} />
      </View>
    </View>
  );
};
