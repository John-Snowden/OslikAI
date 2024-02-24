import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';
import {Themes} from '../../../../Theme';

interface IProps {
  title?: string | undefined;
  defaultValue: number | string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  isLeftAligned?: boolean;
  onChangeText: (text: string) => void;
}

export const CustomInput: React.FC<IProps> = ({
  title,
  defaultValue,
  style,
  inputStyle,
  keyboardType,
  isLeftAligned,
  onChangeText,
}) => {
  const [value, setValue] = useState(String(defaultValue));

  const update = (text: string) => {
    onChangeText(text);
    setValue(text);
  };

  const onBlur = () => {
    if (value === '' && keyboardType === 'number-pad') setValue('0');
  };

  return (
    <View style={[styles.inputWrapper, style]}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        value={value}
        onChangeText={update}
        style={[styles.input, inputStyle, isLeftAligned && styles.leftAligned]}
        selectionColor={Themes.white}
        keyboardType={keyboardType}
        placeholderTextColor={Themes.white}
        multiline
        onBlur={onBlur}
      />
    </View>
  );
};
