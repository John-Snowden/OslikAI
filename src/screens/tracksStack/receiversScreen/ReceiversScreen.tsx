import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, TouchableOpacity, FlatList, Pressable} from 'react-native';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import {Edit} from '../../../../assets/svg/Edit';
import {IconButton} from '../../components/iconButton';
import {stores} from '../../../stores/storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';
import {Delete} from '../../../../assets/svg';

export const ReceiversScreen = observer(() => {
  const {receivers, setCurrentReceiver} = stores.trackStore;

  const navigation = useNavigation();

  const noData = useMemo(() => {
    return (
      <View style={styles.noDataBox}>
        <Text style={styles.text}>
          Чтобы скачать с Ослика записанные поездки, подключи к нему телефон по
          usb и выбери режим "C передачей файлов".
          {'\n\n'}Первое подключение к Ослику может занять пару минут. В
          следующий раз будет быстро.
          {'\n\n'}Посмотри в верхний правый угол. Если видишь крутилку - Ослик
          еще не подключился к телефону.
          {'\n\n'}Если появилась цифра - Ослик подключился и цифра показывает
          количество маршрутов, которые передал Ослик.
          {'\n\n'}Уже можно отключиться от Ослика и даже выйти из приложения -
          данные не потеряются.
          {'\n\n'}Но маршрут еще не сохранен и пользоваться им нельзя. Нажимай
          на цифру и сохраняй.
          {'\n\n'}Все маршруты хранятся в файле Oslik.json и Settings.json в
          папке Downloads (или Загрузки) на телефоне. Не удаляй их, иначе
          потеряешь все данные.
          {'\n\n'}Чтобы скопировать данные на другой телефон, перенеси эти файлы
          в папку Downlods (или Загрузки) с заменой файлов.
        </Text>
      </View>
    );
  }, []);

  const renderItem = ({item}: {item: TReceiver}) => {
    const goToEditModal = () => {
      setCurrentReceiver(item);
      navigation.push('Modals', {screen: 'EditReceiverModal'});
    };

    const goToDeleteModal = () => {
      setCurrentReceiver(item);
      navigation.push('Modals', {screen: 'DeleteReceiverModal'});
    };

    const goToTracksScreen = () => {
      setCurrentReceiver(item);
      navigation.navigate('Tracks', {screen: 'TracksScreen'});
    };

    return (
      <TouchableOpacity
        key={item.id}
        style={styles.receiverCard}
        onPress={goToTracksScreen}
        activeOpacity={0.5}>
        <View style={styles.row}>
          <IconButton
            icon={<Edit />}
            onPress={goToEditModal}
            style={styles.buttonBox}
          />

          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>
              {item.receiverName}
            </Text>
            <Text style={styles.gps} numberOfLines={1}>
              {item.receiverGps}
            </Text>
          </View>
          <IconButton
            icon={<Delete />}
            style={styles.deleteButton}
            onPress={goToDeleteModal}
          />
        </View>

        <View style={styles.lastPackageBox}>
          <Text style={styles.gpsTitle}>Последняя посылка </Text>
          <Text style={styles.gpsTitle}>{item.date}:</Text>
        </View>
        <View style={styles.cardBox}>
          <Text numberOfLines={3} style={styles.gpsTitle}>
            {item.latestPackage}
          </Text>
        </View>
        <Text style={styles.createdAt}>Создано 10.02.2023</Text>
      </TouchableOpacity>
    );
  };

  const goToNewModal = () => {
    navigation.push('Modals', {screen: 'NewModal'});
  };

  return (
    <View style={styles.screen}>
      <Header title={'Получатели'} />
      <Pressable style={styles.newButton} onLongPress={goToNewModal} />

      <FlatList
        data={receivers.slice(0, 1)}
        renderItem={renderItem}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={noData}
      />
    </View>
  );
});
