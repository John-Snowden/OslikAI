import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {styles} from './styles';

interface IProps {
  style?: StyleProp<ViewStyle>;
  textColor?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
}

export const MainButton: React.FC<IProps> = ({
  title,
  onPress,
  style,
  textColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.title, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
};
