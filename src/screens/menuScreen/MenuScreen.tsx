import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ArrowLeft} from '../../../assets/svg';
import {IconButton} from '../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {Add} from '../../../assets/svg/Add';

export const MenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <IconButton icon={<ArrowLeft />} onPress={goBack} />
      <View style={styles.header}>
        <Text style={styles.title}>OslikAI</Text>
      </View>
      <IconButton icon={<Add />} onPress={} />
    </View>
  );
};
