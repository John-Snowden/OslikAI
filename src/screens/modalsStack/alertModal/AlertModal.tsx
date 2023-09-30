import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {styles} from './styles';
import {MainButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

export const AlertModal = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <Pressable style={styles.transperent} onPress={goBack} />
      <View style={styles.contentBox}>
        <Text style={styles.title}>действительно перейти на дьило?</Text>
        <MainButton
          title="ok"
          onPress={() => {}}
          style={styles.whiteButton}
          textColor={styles.blueText}
        />
        <MainButton title="cancel" onPress={goBack} />
      </View>
    </View>
  );
};
