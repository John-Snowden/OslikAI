import {mockReceivers} from './mock';
import {StoresHolder} from '../storesHolder';
import {TReceiver, TRoute} from '../../types/tracks/tracksType';

export class TrackStore {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.receivers = mockReceivers;
  }

  receivers: TReceiver[];
  currentReceiver: TReceiver | null = null;

  newRoute: TRoute = {
    senderName: '',
    senderGps: '',
    date: new Date().toLocaleDateString(),
    img1: '',
    img2: '',
    duration: '',
  };
  newRouteReceiver: TReceiver | null = null;

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
    this.newRoute.senderName = data;
    console.log('name', this.newRoute);
  };

  setSenderGps = (data: string) => {
    this.newRoute.senderGps = data;
    console.log('gps', this.newRoute);
  };

  setNewRouteReceiver = (data: TReceiver) => {
    this.newRouteReceiver = data;
  };

  saveNewRoute = () => {
    console.log('BEFORE:', this.newRouteReceiver?.routes.length);
    const route = {...this.newRoute};
    this.newRouteReceiver?.routes.push(route);
    console.log(
      'AFTER:________',
      this.newRouteReceiver?.routes.length,
      this.newRouteReceiver?.routes,
    );
  };

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
}
