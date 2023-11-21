import {runInAction} from 'mobx';
import {StoresHolder} from '../storesHolder';

export class CrossAppStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  notification = '';
  isShowNotification = false;

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
