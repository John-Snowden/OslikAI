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
    const {
      fsStore: {serverFile},
      routeStore: {setManualRouteSave},
    } = stores;

    const goBack = () => {
      NavigationService.goBack();
    };
    const goToSettings = () => {
      setManualRouteSave(false);
      NavigationService.navigate('NameRouteScreen');
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
        {/* TODO */}
        {/* <IconButton
          icon={
            <View>
              <Disconnected fill={isConnected ? Themes.white : Themes.red} />
              {!isConnected && <View style={styles.line} />}
            </View>
          }
          style={[styles.connectionButton, isConnected && styles.active]}
          isDisabled={!isConnected}
          onPress={safeRemove}
        /> */}
        <TouchableOpacity
          onPress={goToSettings}
          disabled={serverFile.routes.length === 0}
          style={[
            styles.newRouteBox,
            serverFile.routes.length !== 0 && styles.active,
          ]}>
          <Text style={styles.text}>{serverFile.routes.length}</Text>
          <Donkey size={16} />
        </TouchableOpacity>
      </View>
    );
  },
);
