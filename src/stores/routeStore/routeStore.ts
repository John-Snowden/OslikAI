import {StoresHolder} from '../storesHolder';
import {TReceiver, TSender, TTask} from '../../types';
import {runInAction} from 'mobx';

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

  isConnected = false;
  isSafeRemove = false;
  pendingRoutes: TTask[][] = [];
  recordedRoutes: TTask[][] = [];

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
    const route = this.recordedRoutes.shift();

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
    await this.root.fsStore.writeRecordedRoutes();
  };

  editReceiver = (name: string, gps: string) => {
    this.currentReceiver.name = name;
    this.currentReceiver.gps = gps;
    this.receivers = [...this.receivers];

    this.root.fsStore.writeReceivers();
  };

  editSender = (name: string, gps: string) => {
    this.currentSender.name = name;
    this.currentSender.gps = gps;
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

  updatePendingRoutes = () => {
    if (this.backReceiverIndex === -1) this.pendingRoutes = [];
    else {
      this.pendingRoutes = [this.currentSender.route];
      const reversedRoute = [
        ...this.currentReceiver.senders[this.backReceiverIndex].route,
      ].reverse();
      this.pendingRoutes.push(reversedRoute);
    }
  };

  updateRecordedRoutes = (data: TTask[][]) => {
    if (JSON.stringify(data) === JSON.stringify(this.recordedRoutes)) return;
    this.recordedRoutes.push(...data);
  };

  setBackReceiverIndex = (i: number): void => {
    this.backReceiverIndex = i;
  };

  savePendingRoutes = async (timeouts: number[], speeds: number[]) => {
    this.pendingRoutes.forEach((r, i) => {
      r[0].timeout = timeouts[i];
    });

    this.pendingRoutes.forEach((r, i) => {
      r[0].speed = speeds[i];
    });
    this.setBackReceiverIndex(-1);

    await this.root.fsStore.writePendingRoutes();
  };

  setConnectionStatus = async (data: boolean) => {
    this.isConnected = data;
    await this.root.fsStore.resetConnectionStatus();
  };

  setIsSafeRemove = async (data: boolean) => {
    runInAction(() => (this.isSafeRemove = data));
    await this.root.fsStore.writeIsSafeRemove();
    setTimeout(async () => {
      runInAction(() => (this.isSafeRemove = false));
      await this.root.fsStore.writeIsSafeRemove();
    }, 3000);
  };
}
