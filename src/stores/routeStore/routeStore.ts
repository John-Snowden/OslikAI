import {toJS} from 'mobx';
import {Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StoresHolder} from '../storesHolder';
import {TReceiver, TSender, TTask} from '../../types';
import {launchImageLibrary} from 'react-native-image-picker';
import {NavigationService} from '../../services';

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

  saveRoute = async (
    sName: string,
    sGps: string,
    sPhotos: string[],
    rName: string,
    rGps: string,
    rId: string,
  ) => {
    if (sName.toLowerCase() === rName.toLowerCase()) {
      this.root.crossAppStore.showNotification(
        'Имена отправителя и получателя\nне должны совпадать. ',
      );
      return;
    }

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
    this.root.crossAppStore.showNotification('Новый маршрут сохранен');
    NavigationService.navigate('RoutesStack', {screen: 'ReceiversScreen'});
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
      const routeA = [...this.currentSender.route];
      const routeB = [
        ...toJS(this.currentReceiver.senders[this.backReceiverIndex].route),
      ].reverse();

      this.root.fsStore.clientFile.routes = [routeA, routeB];
    }
  };

  declineReverseRoute = () => {
    this.backReceiverIndex = -1;
    this.root.fsStore.clientFile.routes = [this.currentSender.route];
  };

  writePendingRoutes = async (timeouts: number[], speedRates: number[]) => {
    const pendingRoutes = this.root.fsStore.clientFile.routes;

    pendingRoutes[0][0].timeout = timeouts[0];
    if (pendingRoutes.length === 2) pendingRoutes[1][0].timeout = timeouts[1];

    pendingRoutes.forEach((r, i) => {
      r.forEach(task => {
        task.speed = task.speed * speedRates[i];
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

  pickPhotos = async () => {
    const photos = await launchImageLibrary({mediaType: 'photo'});
    const uris = photos.assets?.map(asset => {
      return asset.uri as string;
    });
    return uris;
  };

  appendPhotos = async () => {
    const photos = await this.pickPhotos();
    if (photos) this.currentSender.images.push(...photos);
  };

  validateTask = (task: TTask): boolean => {
    const numberOrFloat = /^(\d+|\d{1,3}(,\d{3})*)([.,]\d+)?$/;
    const isDistanceValid = numberOrFloat.test(task.distance.toString());
    const isDegreeValid = numberOrFloat.test(task.degree.toString());
    const isSpeedValid = numberOrFloat.test(task.speed.toString());
    const isTimeoutValid = numberOrFloat.test(task.timeout.toString());

    if (!isDistanceValid)
      this.root.crossAppStore.showNotification('Ошибка в заполнении дистанции');
    else if (!isDegreeValid)
      this.root.crossAppStore.showNotification(
        'Ошибка в заполнении направления',
      );
    else if (!isSpeedValid)
      this.root.crossAppStore.showNotification('Ошибка в заполнении скорости');
    else if (!isTimeoutValid)
      this.root.crossAppStore.showNotification('Ошибка в заполнении таймаута');
    else if (task.distance > 0 && task.speed === 0)
      this.root.crossAppStore.showNotification(
        'Указана дистанция, но не указана скорость',
      );

    return (
      isDistanceValid &&
      isDegreeValid &&
      isSpeedValid &&
      isTimeoutValid &&
      !(task.distance > 0 && task.speed === 0)
    );
  };
}
