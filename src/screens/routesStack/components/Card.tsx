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

export const Card: React.FC<IProps> = ({
  data,
  isShowDuration,
  onPress,
  onEdit,
  onDelete,
}) => {
  const gps = data.gps ? data.gps : 'gps не указан';
  const createdAt = `Создано ${format(new Date(data.date), 'dd-MM-yyyy')}`;
  const duration = isShowDuration
    ? `Длительность ${((data as TSender).duration / 1000 / 60).toFixed()} мин`
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

      <View style={styles.row}>
        <Text style={styles.createdAt}>{createdAt}</Text>
        {isShowDuration && <Text style={styles.duration}>{duration}</Text>}
      </View>
    </TouchableOpacity>
  );
};
