import {observer} from 'mobx-react-lite';
import React, {useRef, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {TReceiver} from '$src/types';
import {NavigationService} from '../../../services';

import {styles} from './styles';
import {stores} from '../../../stores';
import {AddPhoto} from '../../../../assets/svg';
import {IconButton} from '../../components/iconButton';
import {SCREEN_HEIGHT, statusBar} from '../../../constants';
import {BackGround, CustomInput, Header, MainButton} from '../../components';

export const RegisterRouteScreen = observer(() => {
  const {receivers, isManualRouteSave, saveRecordedRoute} = stores.routeStore;

  const [senderName, setSenderName] = useState('');
  const [senderGps, setSenderGps] = useState('');
  const [senderPhotos, setSenderPhotos] = useState<string[]>([]);
  const [receiverName, setReceiverName] = useState('');
  const [receiverGps, setReceiverGps] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [isFirstScreen, setFirstScreen] = useState(true);

  const pickPhotos = async () => {
    const photos = await launchImageLibrary({mediaType: 'photo'});
    const uris = photos.assets?.map(asset => {
      return asset.uri as string;
    });
    if (uris) setSenderPhotos(uris);
  };

  const ref = useRef<ScrollView>(null);

  const more = () => {
    ref.current?.scrollToEnd();
  };

  const save = () => {
    saveRecordedRoute(
      senderName,
      senderGps,
      senderPhotos,
      receiverName,
      receiverGps,
      receiverId,
    );
    NavigationService.navigate('ReceiversScreen');
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {y} = e.nativeEvent.contentOffset;
    setFirstScreen(y < SCREEN_HEIGHT / 2);
  };

  const editReceiverName = (text: string) => {
    setReceiverId('');
    setReceiverName(text);
  };

  const editReceiverGps = (text: string) => {
    setReceiverId('');
    setReceiverGps(text);
  };

  const renderItem = ({item}: {item: TReceiver}) => {
    const onPress = () => {
      setReceiverName(item.name);
      setReceiverGps(item.gps);
      setReceiverId(item.id);
    };

    return (
      <TouchableOpacity style={styles.receiverBox} onPress={onPress}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>{item.gps}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderPhotos = ({item}: {item: string}) => {
    return (
      <View key={item}>
        <FastImage source={{uri: item}} style={styles.photo} />
      </View>
    );
  };

  return (
    <>
      <BackGround />
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={200}
        pagingEnabled>
        <View style={styles.screen1}>
          <Header title="Сохранить маршрут" isBackButton isMenuButton={false} />
          <View style={styles.box}>
            <Text style={styles.title}>Добавь отправителя</Text>
          </View>
          <View style={styles.inputsWrapper}>
            <CustomInput
              title="Имя отправителя"
              value={senderName}
              onChangeText={setSenderName}
            />
            <CustomInput
              title="gps отправителя"
              value={senderGps}
              keyboardType={'number-pad'}
              onChangeText={setSenderGps}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Добавь фото точки отправления</Text>
          </View>
          <View style={styles.imageWrapper}>
            <IconButton
              icon={<AddPhoto />}
              style={styles.bttn}
              onPress={pickPhotos}
            />
            <FlatList
              data={senderPhotos}
              renderItem={renderPhotos}
              horizontal
            />
          </View>
        </View>
        <View style={styles.screen2}>
          <View style={styles.box}>
            <Text style={styles.title}>Добавь получателя</Text>
          </View>
          <View style={styles.inputsWrapper}>
            <CustomInput
              title="Имя получателя"
              value={receiverName}
              onChangeText={editReceiverName}
            />
            <CustomInput
              title="gps получателя"
              value={receiverGps}
              keyboardType={'number-pad'}
              onChangeText={editReceiverGps}
            />
          </View>
          {!isManualRouteSave && receivers.length !== 0 && (
            <View style={styles.receiverWrapper}>
              <Text style={styles.title}>Или выбери получателя из списка</Text>
              <FlatList
                data={receivers}
                renderItem={renderItem}
                contentContainerStyle={styles.content}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MainButton
          title={isFirstScreen ? 'Далее' : 'Сохранить'}
          disabled={isFirstScreen ? !senderName : !senderName || !receiverName}
          onPress={isFirstScreen ? more : save}
          style={styles.confirmButton}
        />
      </View>
    </>
  );
});
