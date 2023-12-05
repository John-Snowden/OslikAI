import React from 'react';
import {Text, View, Pressable} from 'react-native';

import {styles} from './styles';
import {NavigationService} from '../../../services';

export const NewModal = () => {
  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.screen}>
      <Pressable onPress={goBack} style={styles.bg} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>667368</Text>
      </View>
    </View>
  );
};
