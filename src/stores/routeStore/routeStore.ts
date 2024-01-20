import {toJS} from 'mobx';

import {StoresHolder} from '../storesHolder';
import {TReceiver, TSender, TClient} from '../../types';
import RNFetchBlob from 'rn-fetch-blob';
import {Alert} from 'react-native';

export class RouteStore {
  root: StoresHolder;

  constructor(root: StoresHolder) {
    this.root = root;
    this.receivers = [];
  }

  receivers: TReceiver[];
  currentReceiver!: TReceiver;
  currentSender!: TSender;
  backReceiverIndex: number = -1;

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
    const route = this.root.fsStore.recordedRoutes.shift();

    if (!route) return;

    const sender: TSender = {
      id: String(sName + new Date().getTime()),
      name: sName,
      gps: sGps,
      date: new Date(),
      images: sPhotos,
      duration: route.reduce((sum, current) => {
        return sum + (current.distance / current.speed) * 60 + current.timeout;
      }, 0),
      route,
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
    if (this.backReceiverIndex === -1)
      this.root.fsStore.clientFile.pending.routes = [];
    else {
      const routeA = toJS(this.currentSender.route);
      const routeB = toJS(
        this.currentReceiver.senders[this.backReceiverIndex].route.reverse(),
      );

      this.root.fsStore.clientFile.pending.routes = [routeA, routeB];
    }
  };

  writePendingRoutes = async (timeouts: number[], speeds: number[]) => {
    this.root.fsStore.clientFile.pending.routes[0][0].timeout = timeouts[0];
    this.root.fsStore.clientFile.pending.routes[1][0].timeout = timeouts[1];

    this.root.fsStore.clientFile.pending.routes.forEach((r, i) => {
      r.forEach(task => {
        task.speed = speeds[i];
      });
    });

    this.root.fsStore.clientFile.pending.modified = new Date().getTime();
    this.setBackReceiverIndex(-1);
    try {
      await RNFetchBlob.fs.writeFile(
        this.root.fsStore.clientFilePath,
        JSON.stringify(this.root.fsStore.clientFile),
        'utf8',
      );
    } catch (e) {}
  };
}
