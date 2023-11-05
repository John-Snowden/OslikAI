import {Pressable, Text, View} from 'react-native';
import {CustomInput, MainButton} from '../../components';
import {styles} from './styles';
import {IconButton} from '../../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {stores} from '../../../stores/storesHolder';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

export const EditSenderModal = observer(() => {
  const navigation = useNavigation();

  const {currentSender, setCurrentSender, setSenderName, setSenderGps} =
    stores.trackStore;

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log('gps', currentSender?.senderGps);
  }, [currentSender]);

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={goBack} style={styles.bg} />
      <View style={styles.contentWrapper}>
        <CustomInput
          title="имя отправителя:"
          value={currentSender?.senderName}
          onChangeText={setSenderName}
        />
        <CustomInput
          title="gps отправителя:"
          value={currentSender?.senderGps}
          onChangeText={setSenderGps}
        />
        <MainButton
          title="Ok"
          onPress={setCurrentSender}
          style={styles.buttom}
        />
      </View>
    </View>
  );
});
