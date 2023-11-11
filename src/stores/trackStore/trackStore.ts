import {mockReceivers} from './mock';
import {StoresHolder} from '../storesHolder';
import {TReceiver, TSender} from '../../types/tracks/tracksType';

export class TrackStore {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.receivers = mockReceivers;
  }

  receivers: TReceiver[];
  currentReceiver: TReceiver | null = null;
  currentSender: TSender | null = null;

  newRoute: TSender = {
    id: '',
    senderName: '',
    senderGps: '',
    date: new Date().toLocaleDateString(),
    images: [],
    comment: '',
    duration: '',
    latestPackage: '',
  };
  newRouteReceiver: TReceiver | null = null;

  setCurrentSender = (data: TSender) => {
    this.currentSender = data;
  };

  setCurrentReceiver = (data: TReceiver) => {
    this.currentReceiver = {...data};
  };

  setReceiverName = (data: string) => {
    if (!this.currentReceiver) return;
    this.currentReceiver.receiverName = data;
  };

  setReceiverGps = (data: string) => {
    if (!this.currentReceiver) return;
    this.currentReceiver.receiverGps = data;
  };

  setSenderName = (data: string) => {
    if (!this.currentSender) return;
    this.currentSender.senderName = data;
  };

  setSenderGps = (data: string) => {
    if (!this.currentSender) return;
    this.currentSender.senderGps = data;
  };

  setNewRouteReceiver = (data: TReceiver) => {
    this.newRouteReceiver = data;
  };

  saveNewRoute = () => {};

  updateReceiver = () => {
    let i;

    this.receivers.forEach((r, index) => {
      if (r.id === this.currentReceiver?.id) {
        i = index;
        return;
      }
    });

    if (i !== undefined && this.currentReceiver) {
      this.receivers[i] = this.currentReceiver;
    }
  };

  updateSender = () => {
    let i;

    this.currentReceiver?.senders.forEach((s, index) => {
      if (s.id === this.currentSender?.id) {
        i = index;
        return;
      }
    });

    if (i !== undefined && this.currentSender && this.currentReceiver) {
      this.currentReceiver.senders[i] = this.currentSender;
      this.currentReceiver = {...this.currentReceiver};
    }
  };

  deleteReceiver = () => {
    this.receivers = this.receivers.filter(r => {
      r.id !== this.currentReceiver?.id;
    });
  };

  deleteSender = () => {
    if (!this.currentReceiver) return;
    const senders = this.currentReceiver?.senders.filter(s => {
      return s.id !== this.currentSender?.id;
    });

    this.currentReceiver = {...this.currentReceiver, senders};
  };
}
