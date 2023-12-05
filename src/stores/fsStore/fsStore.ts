import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid} from 'react-native';

import {StoresHolder} from '../storesHolder';
import {TReceiver, TSettings, TTask} from '../../types';

export class FsStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
  }

  settingsOslik!: TSettings;

  basePath = RNFetchBlob.fs.dirs.DownloadDir;
  serverPathOslik = this.basePath + '/OslikHodovaya.json';
  clientPathOslik = this.basePath + '/OslikTelephone.json';

  init = async (): Promise<void> => {
    const isHodovayaExist = await RNFetchBlob.fs.exists(this.serverPathOslik);
    if (!isHodovayaExist) {
      const defaultSettings = {
        isConnected: false,
        isSafeRemove: false,
        pendingRoutes: [],
        recordedRoutes: [],
      };

      this.settingsOslik = defaultSettings;
      await RNFetchBlob.fs.writeFile(
        this.serverPathOslik,
        JSON.stringify(defaultSettings),
        'utf8',
      );
    }

    const isTelephoneExist = await RNFetchBlob.fs.exists(this.clientPathOslik);
    if (!isTelephoneExist) {
      await RNFetchBlob.fs.writeFile(
        this.clientPathOslik,
        JSON.stringify([]),
        'utf8',
      );
    }
  };

  readSettingsOslik = async (): Promise<TSettings> => {
    const json = await RNFetchBlob.fs.readFile(this.serverPathOslik, 'utf8');
    const settings = JSON.parse(json);
    return settings;
  };

  readReceivers = async (): Promise<TReceiver[]> => {
    const isRoutesExist = await RNFetchBlob.fs.exists(this.clientPathOslik);
    if (!isRoutesExist) return [];
    else {
      const routes = await RNFetchBlob.fs.readFile(
        this.clientPathOslik,
        'utf8',
      );
      return JSON.parse(routes);
    }
  };

  writeReceivers = async (): Promise<void> => {
    await RNFetchBlob.fs.writeFile(
      this.clientPathOslik,
      JSON.stringify(this.root.routeStore.receivers),
    );
  };

  writePendingRoutes = async (): Promise<void> => {
    const settings = await this.readSettingsOslik();
    settings.pendingRoutes = this.root.routeStore.pendingRoutes;
    await this.writeToServer(settings);
  };

  writeRecordedRoutes = async () => {
    const settings = await this.readSettingsOslik();
    settings.recordedRoutes = this.root.routeStore.recordedRoutes;
    await this.writeToServer(settings);
  };

  resetConnectionStatus = async () => {
    const settings = await this.readSettingsOslik();
    settings.isConnected = false;
    await this.writeToServer(settings);
  };

  writeIsSafeRemove = async () => {
    const settings = await this.readSettingsOslik();
    settings.isSafeRemove = this.root.routeStore.isSafeRemove;
    await RNFetchBlob.fs.writeFile(
      this.serverPathOslik,
      JSON.stringify(settings),
    );
  };

  writeToServer = async (data: TSettings) => {
    await RNFetchBlob.fs.writeFile(this.serverPathOslik, JSON.stringify(data));
  };

  getPermissions = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
  };
}
