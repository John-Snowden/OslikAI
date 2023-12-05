import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {Themes} from '../../../../Theme';

interface IProps {
  title?: string | undefined;
  value: string | undefined;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
}

export const CustomInput: React.FC<IProps> = ({
  title,
  value,
  style,
  placeholder,
  keyboardType,
  onChangeText,
}) => {
  return (
    <View style={[styles.inputWrapper, style]}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        selectionColor={Themes.white}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={Themes.white}
      />
    </View>
  );
};
