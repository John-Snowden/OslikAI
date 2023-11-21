import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {styles} from './styles';
import {Delete, Edit} from '../../../../assets/svg';
import {IconButton} from '../../components/iconButton';
import {TReceiver, TSender} from '../../../types/tracks/tracksType';

interface IProps {
  data: TReceiver | TSender;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const Card: React.FC<IProps> = ({data, onPress, onEdit, onDelete}) => {
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
            {data.gps}
          </Text>
        </View>

        <IconButton icon={<Edit />} onPress={onEdit} style={styles.buttonBox} />
      </View>

      <View style={styles.row}>
        <Text style={styles.createdAt}>Создано 10.02.2023</Text>
        {(data as TSender).duration && (
          <Text style={styles.duration}>
            Длительность: {(data as TSender).duration} ч
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
