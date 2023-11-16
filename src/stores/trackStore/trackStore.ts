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
  backSender: TSender | null;

  // newRoute: TSender = {
  //   id: '',
  //   senderName: '',
  //   senderGps: '',
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
    this.currentReceiver.receiverName = data;
  };

  setReceiverGps = (data: string) => {
    this.currentReceiver.receiverGps = data;
  };

  setSenderName = (data: string) => {
    this.currentSender.senderName = data;
  };

  setSenderGps = (data: string) => {
    this.currentSender.senderGps = data;
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

  addPendingRoutes = (i: number) => {
    this.pendingRoutes = [];
    const pendingRoutes = [this.currentSender.route];
    if (i) {
      this.backSender = null;
      this.backSender = this.currentReceiver.senders[i];
      pendingRoutes.push(this.currentReceiver.senders[i].route);
      console.log('sss', this.backSender.senderName);
    }
    this.pendingRoutes = pendingRoutes;
  };
}
