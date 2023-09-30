import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

interface IProps {
  icon: JSX.Element;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const IconButton: React.FC<IProps> = ({icon, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
