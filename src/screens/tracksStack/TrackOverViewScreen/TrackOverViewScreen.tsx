import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {styles} from './styles';
import {Header} from '../../components';
import {stores} from '../../../stores/storesHolder';

export const TrackOverViewScreen = observer(() => {
  const {currentReceiver, currentSender, addPendingRoutes} = stores.trackStore;

  const [image, setImage] = useState(currentSender.images[0]);
  const [backButtonIndex, setBackButtonIndex] = useState(-1);
  const navigation = useNavigation();

  const title = currentSender.senderName + ' - ' + currentReceiver.receiverName;

  const renderImages = () => {
    return currentSender.images.map((link, index) => {
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

  const renderButtons = () => {
    return currentReceiver.senders.map((sender, i) => {
      const selectBackTrack = () => {
        setBackButtonIndex(i);
        addPendingRoutes(i);
        navigation.navigate('Modals', {screen: 'ConfirmModal'});
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
      <Header title={title} isBackButton />
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}>
        <FastImage source={{uri: image}} style={[styles.mainImage]} />
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.imgButtonWrapper}
            horizontal>
            {renderImages()}
          </ScrollView>
        </View>
        <View>
          <View style={styles.backTrackBox}>
            <Text style={styles.text}>Обратный путь</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {renderButtons()}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
});
