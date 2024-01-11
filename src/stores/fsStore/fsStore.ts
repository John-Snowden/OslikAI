import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ManageExternalStorage from 'react-native-manage-external-storage';

import {StoresHolder} from '../storesHolder';
import {TClient, TReceiver, TServer, TTask} from '../../types';
import {runInAction} from 'mobx';

export class FsStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  clientFile!: TClient;
  serverFile!: TServer;
  recordedRoutes: TTask[][] = [];

  basePath = RNFetchBlob.fs.dirs.DownloadDir + '/OSLIK';
  clientFilePath = this.basePath + '/ClientFile.json';
  readonly serverFilePath = this.basePath + '/ServerFile.json';
  clientOslikPath = this.basePath + '/Oslik.json';

  serverTimer: NodeJS.Timeout | undefined = undefined;

  init = async (): Promise<void> => {
    const isClientFileExist = await RNFetchBlob.fs.exists(this.clientFilePath);
    console.log('isClientFileExist', isClientFileExist);
    if (!isClientFileExist) {
      this.clientFile = {
        pending: {
          routes: [],
          modified: 0,
        },
        recorded: {modified: 0},
      };

      await RNFetchBlob.fs.writeFile(
        this.clientFilePath,
        JSON.stringify(this.clientFile),
        'utf8',
      );
    } else {
      const json = await RNFetchBlob.fs.readFile(this.clientFilePath, 'utf8');
      runInAction(() => (this.clientFile = JSON.parse(json)));
    }
    console.log('clientFile_____', this.clientFile);

    const isServerFileExist = await RNFetchBlob.fs.exists(this.serverFilePath);
    console.log('isServerFileExist', isServerFileExist);

    if (!isServerFileExist) {
      this.serverFile = {
        pending: {modified: 0},
        recorded: {
          routes: [],
          modified: 0,
        },
      };
      await RNFetchBlob.fs.writeFile(
        this.serverFilePath,
        JSON.stringify(this.serverFile),
        'utf8',
      );
    }

    const isTelephoneExist = await RNFetchBlob.fs.exists(this.clientOslikPath);
    console.log('isTelephoneExist', isTelephoneExist);
    if (!isTelephoneExist) {
      await RNFetchBlob.fs.writeFile(
        this.clientOslikPath,
        JSON.stringify([]),
        'utf8',
      );
    } else {
      const routes = await RNFetchBlob.fs.readFile(
        this.clientOslikPath,
        'utf8',
      );
      runInAction(() => (this.root.routeStore.receivers = JSON.parse(routes)));
    }
  };

  watchServerFile = async () => {
    clearTimeout(this.serverTimer);

    const json = await RNFetchBlob.fs.readFile(this.serverFilePath, 'utf8');
    this.serverFile = JSON.parse(json);
    console.log('serverFile:', JSON.parse(json));

    if (this.serverFile.pending.modified > this.clientFile.pending.modified) {
      this.clientFile.pending.routes = [];
      await RNFetchBlob.fs.writeFile(
        this.clientFilePath,
        JSON.stringify(this.clientFile),
        'utf8',
      );
    }
    if (this.serverFile.recorded.modified > this.clientFile.recorded.modified) {
      if (
        this.recordedRoutes
          .toString()
          .includes(this.serverFile.recorded.routes.toString())
      ) {
        return;
      }
      this.recordedRoutes.push(...this.serverFile.recorded.routes);
      this.clientFile.recorded.modified = new Date().getTime();
      await RNFetchBlob.fs.writeFile(
        this.clientFilePath,
        JSON.stringify(this.clientFile),
        'utf8',
      );
      // TODO
      const x = await RNFetchBlob.fs.readFile(this.clientFilePath, 'utf8');
      this.root.crossAppStore.showNotification(
        this.serverFile.recorded.routes.length > 0
          ? 'Скачаны новые маршруты' +
              JSON.stringify(this.clientFile) +
              '---' +
              x
          : 'Скачан новый маршрут' +
              JSON.stringify(this.clientFile) +
              '---' +
              x,
      );
    }

    this.serverTimer = setTimeout(() => {
      this.watchServerFile();
    }, 3000);
  };

  writeReceivers = async (): Promise<void> => {
    await RNFetchBlob.fs.writeFile(
      this.clientOslikPath,
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
