import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../iconButton';
import {observer} from 'mobx-react-lite';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {Back, Menu} from '../../../../assets/svg';

interface IProps {
  title: string;
  isBackButton?: boolean;
  isMenuButton?: boolean;
  onBackPress?: () => void;
}

export const Header: React.FC<IProps> = observer(
  ({title, isBackButton, isMenuButton = true, onBackPress}) => {
    const {
      routeStore: {setManualRouteSave},
    } = stores;

    const goBack = () => {
      if (onBackPress) onBackPress();
      NavigationService.goBack();
    };
    const goToMenu = () => {
      setManualRouteSave(false);
      NavigationService.navigate('Menu');
    };

    return (
      <View style={[styles.header, styles.row]}>
        {isBackButton && (
          <View style={styles.backButton}>
            <IconButton icon={<Back />} onPress={goBack} />
          </View>
        )}
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {isMenuButton && (
          <TouchableOpacity onPress={goToMenu} style={styles.menu}>
            <Menu size={17} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
