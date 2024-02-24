import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../iconButton';
import {observer} from 'mobx-react-lite';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {ArrowLeft, Menu} from '../../../../assets/svg';

interface IProps {
  title: string;
  isBackButton?: boolean;
  isMenuButton?: boolean;
}

export const Header: React.FC<IProps> = observer(
  ({title, isBackButton, isMenuButton = true}) => {
    const {
      routeStore: {setManualRouteSave},
    } = stores;

    const goBack = () => {
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
            <IconButton icon={<ArrowLeft />} onPress={goBack} />
          </View>
        )}
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {isMenuButton && (
          <TouchableOpacity onPress={goToMenu} style={styles.menu}>
            <Menu size={18} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
