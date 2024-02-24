import RNFetchBlob from 'rn-fetch-blob';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ManageExternalStorage from 'react-native-manage-external-storage';

import {StoresHolder} from '../storesHolder';
import {TReceiver, TRoutes, TTask} from '../../types';
import {runInAction} from 'mobx';

export class FsStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  clientFile!: TRoutes;
  serverFile!: TRoutes;

  basePath = RNFetchBlob.fs.dirs.DownloadDir + '/OSLIK';
  clientFilePath = this.basePath + '/ClientFile.json';
  serverFilePath = this.basePath + '/ServerFile.json';
  clientUpdatedPath = this.basePath + '/ClientUpdated.txt';
  serverUpdatedPath = this.basePath + '/ServerUpdated.txt';
  oslikFilePath = this.basePath + '/Oslik.json';

  serverTimer: NodeJS.Timeout | undefined = undefined;

  init = async (): Promise<void> => {
    const isClientFileExist = await RNFetchBlob.fs.exists(this.clientFilePath);
    if (!isClientFileExist) {
      this.root.crossAppStore.showNotification(
        'Файлы настроек не созданы.\nСоздаю...',
      );
      setTimeout(() => {
        this.root.crossAppStore.showNotification('Созданы файлы настроек');
      }, 3000);
      this.clientFile = {routes: []};

      await RNFetchBlob.fs.writeFile(
        this.clientFilePath,
        JSON.stringify(this.clientFile),
        'utf8',
      );
    } else {
      const json = await RNFetchBlob.fs.readFile(this.clientFilePath, 'utf8');
      runInAction(() => (this.clientFile = JSON.parse(json)));
    }

    const isServerFileExist = await RNFetchBlob.fs.exists(this.serverFilePath);
    if (!isServerFileExist) {
      this.serverFile = {routes: []};
      await RNFetchBlob.fs.writeFile(
        this.serverFilePath,
        JSON.stringify(this.serverFile),
        'utf8',
      );
    } else {
      const json = await RNFetchBlob.fs.readFile(this.serverFilePath, 'utf8');
      runInAction(() => (this.serverFile = JSON.parse(json)));
    }

    const isOslikFileExist = await RNFetchBlob.fs.exists(this.oslikFilePath);
    if (!isOslikFileExist) {
      await RNFetchBlob.fs.writeFile(
        this.oslikFilePath,
        JSON.stringify([]),
        'utf8',
      );
    } else {
      const routes = await RNFetchBlob.fs.readFile(this.oslikFilePath, 'utf8');
      runInAction(() => (this.root.routeStore.receivers = JSON.parse(routes)));
    }
  };

  watchPendingStatus = async () => {
    try {
      const isClientUpdated = await AsyncStorage.getItem('clientUpdated');
      const isPendingUploaded = await RNFetchBlob.fs.exists(
        this.clientUpdatedPath,
      );
      if (isClientUpdated === 'true' && !isPendingUploaded) {
        this.root.crossAppStore.showNotification('Маршруты загружены в Ослика');
        await AsyncStorage.setItem('clientUpdated', 'false');
      }
    } catch (e) {
    } finally {
      setTimeout(async () => {
        this.watchPendingStatus();
      }, 5000);
    }
  };

  watchRecordedStatus = async () => {
    try {
      const isServerUpdated = await RNFetchBlob.fs.exists(
        this.serverUpdatedPath,
      );
      if (isServerUpdated) {
        try {
          const json = await RNFetchBlob.fs.readFile(
            this.serverFilePath,
            'utf8',
          );
          runInAction(() => (this.serverFile = {...JSON.parse(json)}));
          await RNFetchBlob.fs.unlink(this.serverUpdatedPath);
          this.root.crossAppStore.showNotification('Скачаны новые маршруты');
        } catch (e) {
          Alert.alert('Ошибка чтения serverFile: ' + e);
        }
      }
    } catch (e) {
    } finally {
      setTimeout(() => {
        this.watchRecordedStatus();
      }, 5000);
    }
  };

  writeReceivers = async (): Promise<void> => {
    await RNFetchBlob.fs.writeFile(
      this.oslikFilePath,
      JSON.stringify(this.root.routeStore.receivers as TReceiver[]),
      'utf8',
    );
  };

  getPermissions = async () => {
    if (Platform.OS === 'android' && Platform.Version <= 29) {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } else {
      const isPermissionAsked = await AsyncStorage.getItem('isPermissionAsked');

      if (isPermissionAsked !== null) return;
      await AsyncStorage.setItem('isPermissionAsked', 'true');
      await (ManageExternalStorage as any).checkAndGrantPermission();
    }
  };
}
