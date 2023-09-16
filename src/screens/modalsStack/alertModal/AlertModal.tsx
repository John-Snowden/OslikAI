import {View, Text} from 'react-native';
import {styles} from './styles';
import {MainButton} from '../../components';

export const AlertModal = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.transperent}></View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>действительно перейти на дьило?</Text>
        <MainButton
          title="ok"
          onPress={() => {}}
          style={styles.whiteButton}
          textColor={styles.blueText}
        />
        <MainButton title="cancel" onPress={() => {}} />
      </View>
    </View>
  );
};
