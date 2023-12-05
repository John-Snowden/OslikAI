import React from 'react';
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
  disabled?: boolean;
  onPress: () => void;
}

export const MainButton: React.FC<IProps> = ({
  title,
  onPress,
  style,
  textColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, disabled && styles.disabled]}
      disabled={disabled}>
      <Text style={[styles.title, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
};
