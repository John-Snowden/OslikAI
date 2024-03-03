import React from 'react';
import {format} from 'date-fns';
import {TouchableOpacity, View, Text, Image} from 'react-native';

import {TReceiver, TSender} from '$src/types';

import {styles} from './styles';
import {Delete, Pencil, Edit} from '../../../../../assets/svg';
import {IconButton} from '../../../components/iconButton';
import ru from 'date-fns/locale/ru';

interface IProps {
  data: TReceiver | TSender;
  isShowDuration?: boolean;
  onPress: () => void;
  onEditSenderRoute?: () => void;
  onEditSender: () => void;
  onDelete: () => void;
}

export const Card: React.FC<IProps> = ({
  data,
  onPress,
  onEditSenderRoute,
  onEditSender,
  onDelete,
}) => {
  const gps = data.gps ? data.gps : 'gps не указан';
  const createdAt = `Создано ${format(new Date(data.date), 'd MMM в hh:mm', {
    locale: ru,
  })}`;
  const duration = (data as TSender).duration
    ? `Время выполнения ${(data as TSender).duration.toFixed()} мин`
    : '';
  const route = (data as TSender).route ? (data as TSender).route : null;

  return (
    <TouchableOpacity
      key={data.id}
      style={styles.receiverCard}
      onPress={onPress}
      activeOpacity={0.5}>
      <Image
        source={require('../../../../../assets/images/noise.png')}
        style={styles.noise}
      />
      <View style={styles.row}>
        <IconButton
          icon={<Delete />}
          style={styles.deleteButton}
          onPress={onDelete}
        />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.gps} numberOfLines={1}>
            {gps}
          </Text>
        </View>

        {onEditSenderRoute && (
          <IconButton
            icon={<Edit />}
            onPress={onEditSenderRoute}
            style={styles.viewRouteButton}
          />
        )}
        <IconButton
          icon={<Pencil size={18} />}
          onPress={onEditSender}
          style={styles.buttonBox}
        />
      </View>

      {(data as TSender).comment && (
        <View style={styles.commentBox}>
          <Text style={styles.title}>{(data as TSender).comment}</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.createdAt}>{createdAt}</Text>
        {duration && <Text style={styles.duration}>{duration}</Text>}
      </View>
    </TouchableOpacity>
  );
};
