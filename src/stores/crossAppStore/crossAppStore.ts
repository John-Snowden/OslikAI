import {runInAction} from 'mobx';
import SplashScreen from 'react-native-splash-screen';

import {NavigationService} from '../../services';
import {EMenuScreens} from '../../constants';

import {StoresHolder} from '../storesHolder';

export class CrossAppStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  notification = '';
  isShowNotification = false;

  loadApp = async () => {
    await this.root.fsStore.getPermissions();
    await this.root.fsStore.init();
    this.root.fsStore.watchPendingStatus();
    this.root.fsStore.watchRecordedStatus();
    SplashScreen.hide();
    setTimeout(() => {
      const {receivers} = this.root.routeStore;
      NavigationService.replace(
        receivers.length === 0
          ? EMenuScreens.InstructionsScreen
          : 'RoutesStack',
        {screen: 'ReceiversScreen'},
      );
    }, 2300);
  };

  showNotification = (text: string): void => {
    setTimeout(() => {
      runInAction(() => {
        this.notification = text;
      });
    }, 0);
  };

  closeNotification = () => {
    this.notification = '';
  };
}
