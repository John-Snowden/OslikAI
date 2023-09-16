import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {Themes} from '../../../../Theme';

export const BackGround = () => {
  return (
    <LinearGradient
      colors={[Themes.blue23, Themes.blue23, Themes.blue23]}
      locations={[0, 0.25, 1]}
      style={styles.screen}
    />
  );
};
