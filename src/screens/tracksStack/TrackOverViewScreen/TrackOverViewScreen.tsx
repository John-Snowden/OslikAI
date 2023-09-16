import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from '../../components';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const TrackOverViewScreen = () => {
  const [image, setImage] = useState(mockData[0]);
  const [backButtonIndex, setBackButtonIndex] = useState(-1);
  const navigation = useNavigation();

  const renderItems = () => {
    return mockData.map((link, index) => {
      const isLast = mockData.length === index;
      const selectImage = () => {
        setImage(link);
      };
      return (
        <TouchableOpacity onPress={selectImage} key={index}>
          <Image
            source={{uri: link}}
            style={[styles.imgButton, !isLast && styles.margRight]}
          />
        </TouchableOpacity>
      );
    });
  };
  const renderNumbs = () => {
    return mockNumbs.map((numb, i) => {
      const selectBackTrack = () => {
        setBackButtonIndex(i);
        navigation.navigate('Modals', {screen: 'AlertModal'});
      };
      const isLast = mockNumbs.length === i;
      const isSelected = i === backButtonIndex;
      return (
        <TouchableOpacity
          style={[
            styles.numbBox,
            !isLast && styles.margRight,
            isSelected && styles.selected,
          ]}
          onPress={selectBackTrack}
          key={numb}>
          <Text style={styles.text}>{numb}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <Header title={'Склад-Кабан'} />

      <ScrollView style={styles.screen}>
        <View>
          <Image source={{uri: image}} style={styles.mainImage} />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.imgButtonWrapper}
          horizontal>
          {renderItems()}
        </ScrollView>
        {mockComment && (
          <View style={styles.commBox}>
            <Text style={styles.text}>{mockComment}</Text>
          </View>
        )}
      </ScrollView>

      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {renderNumbs()}
        </ScrollView>
      </View>
    </>
  );
};

const mockData = [
  'https://topogis.ru/wp-content/uploads/2019/01/04.jpg',
  'https://de-ussr.com/uploads/images/t1/t1_019.jpg',
  'https://fsd.videouroki.net/products/conspekty/geo6/10-znachieniie-planov-miestnosti-i-ghieoghrafichieskikh-kart.files/image001.jpg',
  'https://i0.wp.com/s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/26004027049/original/5pOa4AH2jMebWiIGciFMO2smx5-Aqje56w.png',
  'https://topogis.ru/wp-content/uploads/2019/01/04.jpg',
  'https://de-ussr.com/uploads/images/t1/t1_019.jpg',
  'https://fsd.videouroki.net/products/conspekty/geo6/10-znachieniie-planov-miestnosti-i-ghieoghrafichieskikh-kart.files/image001.jpg',
  'https://i0.wp.com/s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/26004027049/original/5pOa4AH2jMebWiIGciFMO2smx5-Aqje56w.png',
];

const mockComment = 'растяжки. взять сапера в проводники. позывной Ильич';

const mockNumbs = [1, 2, 3, 4, 5, 6, 7, 8];
