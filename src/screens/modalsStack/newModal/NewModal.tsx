import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const NewModal = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
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
