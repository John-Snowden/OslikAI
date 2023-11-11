import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from '../../components';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react-lite';
import {stores} from '../../../stores/storesHolder';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';

export const TrackOverViewScreen = observer(() => {
  const {currentReceiver, currentSender} = stores.trackStore;

  const [image, setImage] = useState(currentSender?.images[0]);
  const [backButtonIndex, setBackButtonIndex] = useState(-1);
  const navigation = useNavigation();

  const renderItems = () => {
    return currentSender?.images.map((link, index) => {
      const isLast = currentSender.images.length === index;
      const selectImage = () => {
        setImage(link);
      };
      return (
        <TouchableOpacity onPress={selectImage} key={index}>
          <FastImage
            source={{uri: link}}
            style={[styles.imgButton, !isLast && styles.margRight]}
          />
        </TouchableOpacity>
      );
    });
  };
  const renderNumbs = () => {
    return currentReceiver?.senders.map((sender, i) => {
      const selectBackTrack = () => {
        setBackButtonIndex(i);
        navigation.navigate('Modals', {screen: 'AlertModal'});
      };
      const isLast = currentReceiver.senders.length === i;
      const isSelected = i === backButtonIndex;
      return (
        <TouchableOpacity
          style={[
            styles.numbBox,
            !isLast && styles.margRight,
            isSelected && styles.selected,
          ]}
          onPress={selectBackTrack}
          key={sender.id}>
          <Text style={styles.text}>{sender.senderName}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <Header
        title={
          currentReceiver?.receiverName + ' - ' + currentSender?.senderName
        }
        isHideBackButton
      />

      <View style={styles.screen} showsVerticalScrollIndicator={false}>
        {/* <GestureHandlerRootView style={styles.mainImage}>
          <ImageViewer imageUrls={[{uri: image}]} resizeMode="contain" />
        </GestureHandlerRootView> */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.imgButtonWrapper}
          horizontal>
          {renderItems()}
        </ScrollView>
        {currentSender?.comment && (
          <View style={styles.commBox}>
            <Text style={styles.text}>{currentSender.comment}</Text>
          </View>
        )}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.horScroll}>
          {renderNumbs()}
        </ScrollView>
      </View>
    </>
  );
});
