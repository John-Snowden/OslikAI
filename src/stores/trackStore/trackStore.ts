import {mockReceivers} from './mock';
import {StoresHolder} from '../storesHolder';
import {TReceiver, TTask, TSender} from '../../types/tracks/tracksType';

export class TrackStore {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.receivers = mockReceivers;
  }

  receivers: TReceiver[];
  currentReceiver!: TReceiver;
  currentSender!: TSender;
  backReceiver: TSender | null;

  // newRoute: TSender = {
  //   id: '',
  //   name: '',
  //   gps: '',
  //   date: new Date().toLocaleDateString(),
  //   images: [],
  //   comment: '',
  //   duration: '',
  //   latestPackage: '',
  //   route: 'mock',
  // };
  newRouteReceiver: TReceiver | null = null;

  pendingRoutes: TTask[][] = [];

  setCurrentSender = (data: TSender) => {
    this.currentSender = data;
  };

  setCurrentReceiver = (data: TReceiver) => {
    this.currentReceiver = {...data};
  };

  setReceiverName = (data: string) => {
    this.currentReceiver.name = data;
  };

  setReceiverGps = (data: string) => {
    this.currentReceiver.name = data;
  };

  setSenderName = (data: string) => {
    this.currentSender.name = data;
  };

  setSenderGps = (data: string) => {
    this.currentSender.gps = data;
  };

  setNewRouteReceiver = (data: TReceiver) => {
    this.newRouteReceiver = data;
  };

  saveNewRoute = () => {};

  updateReceiver = () => {
    let i;

    this.receivers.forEach((r, index) => {
      if (r.id === this.currentReceiver.id) {
        i = index;
        return;
      }
    });

    if (i !== undefined) {
      this.receivers[i] = this.currentReceiver;
    }
  };

  updateSender = () => {
    let i;

    this.currentReceiver.senders.forEach((s, index) => {
      if (s.id === this.currentSender.id) {
        i = index;
        return;
      }
    });

    if (i !== undefined) {
      this.currentReceiver.senders[i] = this.currentSender;
      this.currentReceiver = {...this.currentReceiver};
    }
  };

  deleteReceiver = () => {
    this.receivers = this.receivers.filter(r => {
      r.id !== this.currentReceiver.id;
    });
  };

  deleteSender = () => {
    const senders = this.currentReceiver.senders.filter(s => {
      return s.id !== this.currentSender.id;
    });

    this.currentReceiver = {...this.currentReceiver, senders};
  };

  updatePendingRoutes = (i: number) => {
    this.pendingRoutes = [];
    const pendingRoutes = [this.currentSender.route];
    if (i) {
      this.backReceiver = null;
      this.backReceiver = this.currentReceiver.senders[i];
      pendingRoutes.push(this.currentReceiver.senders[i].route);
    }

    this.pendingRoutes = pendingRoutes;
  };

  savePendingRoutes = (timeouts: number[]) => {
    if (timeouts.length !== 0) {
      this.pendingRoutes.forEach((r, i) => {
        r.timeout = timeouts[i];
      });
    }
  };
}
