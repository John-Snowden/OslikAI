import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../iconButton';
import {observer} from 'mobx-react-lite';
import {stores} from '../../../stores/storesHolder';
import {NavigationService} from '../../../services';
import {ArrowLeft, Disconnected, Donkey} from '../../../../assets/svg';
import {Themes} from '../../../../Theme';

interface IProps {
  title: string;
  isBackButton?: boolean;
  isMenuButton?: boolean;
}

export const Header: React.FC<IProps> = observer(
  ({title, isBackButton, isMenuButton = true}) => {
    const {isConnected, recordedRoutes, setIsSafeRemove} = stores.routeStore;

    const goBack = () => {
      NavigationService.goBack();
    };
    const goToSettings = () => {
      NavigationService.navigate('CreateRouteScreen');
    };

    const safeRemove = () => {
      setIsSafeRemove(true);
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
        <TouchableOpacity
          onPress={safeRemove}
          disabled={!isConnected}
          style={styles.disconnected}>
          <Disconnected fill={isConnected ? Themes.lightBlue : Themes.white} />
          {!isConnected && <View style={styles.line} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToSettings}
          disabled={recordedRoutes.length === 0}
          style={[
            styles.newRouteBox,
            recordedRoutes.length > 0 && styles.active,
          ]}>
          <View style={styles.routesBox}>
            <Text style={styles.text}>{recordedRoutes.length}</Text>
          </View>
          <Donkey size={22} />
        </TouchableOpacity>
      </View>
    );
  },
);
