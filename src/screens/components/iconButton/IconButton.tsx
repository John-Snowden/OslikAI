import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './style';

interface IProps {
  icon: JSX.Element;
  onPress: () => void;
}

export const IconButton: React.FC<IProps> = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
