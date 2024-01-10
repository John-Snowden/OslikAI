import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './styles';

interface IProps {
  icon: JSX.Element;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const IconButton: React.FC<IProps> = ({
  icon,
  isDisabled,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={isDisabled}>
      {icon}
    </TouchableOpacity>
  );
};
