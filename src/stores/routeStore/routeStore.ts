import {toJS} from 'mobx';
import {Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StoresHolder} from '../storesHolder';
import {TReceiver, TSender, TTask} from '../../types';

export class RouteStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  receivers: TReceiver[] = [];
  currentReceiver!: TReceiver;
  currentSender!: TSender;
  backReceiverIndex: number = -1;

  customRoute: TTask[] = [];
  currentCustomTask: TTask | null = null;
  isManualRouteSave = false;

  setManualRouteSave = (bool: boolean) => {
    this.isManualRouteSave = bool;
  };

  setCurrentCustomTask = (data: TTask) => {
    this.currentCustomTask = data;
  };

  addCustomTask = (data: TTask) => {
    this.customRoute = [...this.customRoute, data];
  };

  editCustomTask = (data: TTask) => {
    this.customRoute = this.customRoute.map(task => {
      return task.id === this.currentCustomTask?.id ? data : task;
    });
  };

  deleteCustomTask = () => {
    this.customRoute = this.customRoute.filter(
      task => task.id !== this.currentCustomTask?.id,
    );
  };

  setCurrentSender = (data: TSender) => {
    this.currentSender = data;
  };

  setCurrentReceiver = (data: TReceiver) => {
    this.currentReceiver = data;
  };

  saveRecordedRoute = async (
    sName: string,
    sGps: string,
    sPhotos: string[],
    rName: string,
    rGps: string,
    rId: string,
  ) => {
    const savedRoute = this.isManualRouteSave
      ? this.customRoute
      : (this.root.fsStore.serverFile.routes.shift() as TTask[]);

    const sender: TSender = {
      id: String(sName + new Date().getTime()),
      name: sName,
      gps: sGps,
      date: new Date(),
      images: sPhotos,
      duration: savedRoute.reduce((sum, current) => {
        return sum + (current.distance / current.speed) * 60 + current.timeout;
      }, 0),
      route: savedRoute,
      comment: '',
    };

    const existingReceiver = this.receivers.find(r => r.id === rId);
    if (existingReceiver) existingReceiver.senders.push(sender);
    else {
      const receiver: TReceiver = {
        id: String(rName + new Date().getTime()),
        name: rName,
        gps: rGps,
        date: new Date(),
        senders: [sender],
      };
      this.receivers.push(receiver);
    }

    await this.root.fsStore.writeReceivers();
    await RNFetchBlob.fs.writeFile(
      this.root.fsStore.serverFilePath,
      JSON.stringify(this.root.fsStore.serverFile),
    );
  };

  editReceiver = (name: string, gps: string) => {
    this.currentReceiver.name = name;
    this.currentReceiver.gps = gps;
    this.receivers = [...this.receivers];

    this.root.fsStore.writeReceivers();
  };

  editSender = (name: string, gps: string, comment: string) => {
    this.currentSender.name = name;
    this.currentSender.gps = gps;
    this.currentSender.comment = comment;
    this.currentReceiver.senders = [...this.currentReceiver.senders];

    this.root.fsStore.writeReceivers();
  };

  deleteReceiver = async (): Promise<void> => {
    this.receivers = this.receivers.filter(r => {
      return r.id !== this.currentReceiver.id;
    });
    await this.root.fsStore.writeReceivers();
  };

  deleteSender = async (): Promise<void> => {
    const senders = this.currentReceiver.senders.filter(s => {
      return s.id !== this.currentSender.id;
    });

    this.currentReceiver.senders = senders;
    await this.root.fsStore.writeReceivers();
  };

  setBackReceiverIndex = (i: number): void => {
    this.backReceiverIndex = i;
  };

  updatePendingRoutes = () => {
    if (this.backReceiverIndex === -1) this.root.fsStore.clientFile.routes = [];
    else {
      const routeA = toJS(this.currentSender.route);
      const routeB = toJS(
        this.currentReceiver.senders[this.backReceiverIndex].route.reverse(),
      );

      this.root.fsStore.clientFile.routes = [routeA, routeB];
    }
  };

  writePendingRoutes = async (timeouts: number[], speeds: number[]) => {
    this.root.fsStore.clientFile.routes[0][0].timeout = timeouts[0];
    this.root.fsStore.clientFile.routes[1][0].timeout = timeouts[1];

    this.root.fsStore.clientFile.routes.forEach((r, i) => {
      r.forEach(task => {
        task.speed = speeds[i];
      });
    });

    this.setBackReceiverIndex(-1);
    try {
      await RNFetchBlob.fs.writeFile(
        this.root.fsStore.clientFilePath,
        JSON.stringify(this.root.fsStore.clientFile),
        'utf8',
      );
    } catch (e) {}
    try {
      await RNFetchBlob.fs.writeFile(this.root.fsStore.clientUpdatedPath, '');
      await AsyncStorage.setItem('clientUpdated', 'true');
    } catch (e) {
      Alert.alert('Ошибка записи clientUpdatedPath');
    }
  };
}
