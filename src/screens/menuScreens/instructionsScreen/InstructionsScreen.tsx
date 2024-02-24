import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import {stores} from '../../../stores';
import {explainers} from '../../../constants';
import {Header} from '../../components';

import {styles} from './styles';

export const InstructionsScreen: React.FC = () => {
  const {receivers} = stores.routeStore;

  const renderItems = () => {
    return explainers.map((item, i) => {
      const isLast = i === explainers.length - 1;
      return (
        <View key={i}>
          <View>
            <Text style={styles.title}>{item.header}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          {!isLast && <View style={styles.sep} />}
        </View>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <Header title="Инструкция" isBackButton={receivers.length !== 0} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderItems()}
      </ScrollView>
    </View>
  );
};
