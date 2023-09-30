import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import {Edit} from '../../../../assets/svg/Edit';
import {IconButton} from '../../components/iconButton';

export const ReceiversScreen = () => {
  const navigation = useNavigation();
  const goToEditModal = () => {
    navigation.navigate('Modals', {screen: 'EditModal'});
  };
  const goToTracksScreen = () => {
    navigation.navigate('Tracks', {screen: 'TracksScreen'});
  };
  const renderItem = ({item}: {item: {title: string; gps: string}}) => {
    return (
      <TouchableOpacity
        style={styles.receiverCard}
        onPress={goToTracksScreen}
        activeOpacity={0.5}>
        <View style={[styles.row, styles.box]}>
          <View style={styles.buttonBox}>
            <IconButton icon={<Edit />} onPress={goToEditModal} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.gpsWrapper}>
          <View style={styles.gpsBox}>
            <Text style={styles.gpsTitle}>gps:</Text>
          </View>
          <Text style={styles.gps}>{item.gps}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <Header title={'Получатели'} isHideBackButton />
      <FlatList
        data={mockData}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// TODO
const mockData = [
  {title: 'Кабан1', gps: '1341.243456.786'},
  {title: 'Кабан2', gps: '876.98.234'},
  {title: 'Пухлый', gps: '3456.87654.08'},
  {title: 'Кабан1', gps: '1341.243456.786'},
  {title: 'Кабан2', gps: '876.98.234'},
  {title: 'Пухлый', gps: '3456.87654.08'},
];
