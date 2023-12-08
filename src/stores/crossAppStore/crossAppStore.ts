import {runInAction} from 'mobx';
import SplashScreen from 'react-native-splash-screen';

import {NavigationService} from '../../services';

import {StoresHolder} from '../storesHolder';

export class CrossAppStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  notification = '';
  isShowNotification = false;

  connectionTimer: NodeJS.Timeout | undefined = undefined;
  recordedTimer: NodeJS.Timeout | undefined = undefined;

  loadApp = async () => {
    await this.root.fsStore.getPermissions();
    await this.root.fsStore.init();
    const receivers = await this.root.fsStore.readReceivers();
    runInAction(() => (this.root.routeStore.receivers = receivers));

    let connectionAttempts = 0;

    this.connectionTimer = setInterval(async () => {
      const {isConnected} = await this.root.fsStore.readSettingsOslik();

      if (!isConnected) connectionAttempts += 1;
      else connectionAttempts = 0;

      this.root.routeStore.setConnectionStatus(connectionAttempts <= 1);
    }, 1000);

    this.recordedTimer = setInterval(async () => {
      if (!this.root.routeStore.isConnected) return;

      const {recordedRoutes} = await this.root.fsStore.readSettingsOslik();
      if (recordedRoutes.length !== 0) {
        this.root.routeStore.updateRecordedRoutes(recordedRoutes);
      }
    }, 1000);

    SplashScreen.hide();
    setTimeout(() => {
      NavigationService.replace('RoutesStack', {screen: 'ReceiversScreen'});
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
