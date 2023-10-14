import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {Themes} from '../../../../Theme';

import {styles} from './styles';

interface IProps {
  title: string | undefined;
  value: string | undefined;
  onChangeText: (text: string) => void;
}

export const CustomInput: React.FC<IProps> = ({title, value, onChangeText}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        selectionColor={Themes.white}
      />
    </View>
  );
};
