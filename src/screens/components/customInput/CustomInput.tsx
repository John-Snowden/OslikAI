import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {Themes} from '../../../../Theme';

import {styles} from './styles';

interface IProps {
  title: string;
  value: string;
}

export const CustomInput: React.FC<IProps> = ({title, value}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={value}
        style={styles.input}
        selectionColor={Themes.white}
      />
    </View>
  );
};
