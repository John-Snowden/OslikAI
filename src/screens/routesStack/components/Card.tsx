import React from 'react';
import {format} from 'date-fns';
import {TouchableOpacity, View, Text} from 'react-native';

import {TReceiver, TSender} from '$src/types';

import {styles} from './styles';
import {Delete, Edit} from '../../../../assets/svg';
import {IconButton} from '../../components/iconButton';

interface IProps {
  data: TReceiver | TSender;
  isShowDuration?: boolean;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const Card: React.FC<IProps> = ({data, onPress, onEdit, onDelete}) => {
  const gps = data.gps ? data.gps : 'gps не указан';
  const createdAt = `Создано ${format(
    new Date(data.date),
    'dd-MM-yyyy, в hh:mm',
  )}`;
  const duration = (data as TSender).duration
    ? `Длительность ${(data as TSender).duration.toFixed()} мин`
    : '';

  return (
    <TouchableOpacity
      key={data.id}
      style={styles.receiverCard}
      onPress={onPress}
      activeOpacity={0.5}>
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

        <IconButton icon={<Edit />} onPress={onEdit} style={styles.buttonBox} />
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
