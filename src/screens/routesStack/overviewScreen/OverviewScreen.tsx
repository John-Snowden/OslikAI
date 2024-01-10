import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import FastImage from 'react-native-fast-image';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {styles} from './styles';
import {BackGround, Header} from '../../components';
import {NoPhoto} from '../../../../assets/svg';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';

export const OverviewScreen = observer(() => {
  const {
    currentReceiver,
    currentSender,
    backReceiverIndex,
    updatePendingRoutes,
    setBackReceiverIndex,
  } = stores.routeStore;

  const [image, setImage] = useState(currentSender.images[0]);

  const title = currentSender.name + ' - ' + currentReceiver.name;
  const isNoPhotos = currentSender.images.length === 0;

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

  const renderBackRoutes = () => {
    return currentReceiver.senders.map((sender, i) => {
      const selectBackTrack = () => {
        setBackReceiverIndex(i);
        updatePendingRoutes();
        NavigationService.navigate('Modals', {screen: 'ConfirmModal'});
      };
      const isLast = currentReceiver.senders.length === i;
      const isSelected = i === backReceiverIndex;

      return (
        <TouchableOpacity
          style={[
            styles.numbBox,
            !isLast && styles.margRight,
            isSelected && styles.selected,
          ]}
          onPress={selectBackTrack}
          key={sender.id}>
          <Text style={styles.text}>{sender.name}</Text>
          <Text style={styles.text}>{sender.gps ? sender.gps : '-'}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <BackGround />
      <Header title={title} isBackButton />
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}>
        {isNoPhotos ? (
          <View style={styles.noPhotoBox}>
            <NoPhoto />
          </View>
        ) : (
          <>
            <FastImage source={{uri: image}} style={[styles.mainImage]} />
            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.imgButtonWrapper}
                horizontal>
                {renderImages()}
              </ScrollView>
            </View>
          </>
        )}
        <View>
          <View style={styles.backTrackBox}>
            <Text style={styles.text}>Укажи обратный путь</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {renderBackRoutes()}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
});
