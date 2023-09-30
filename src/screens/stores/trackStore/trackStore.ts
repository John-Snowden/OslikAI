import {mockReceivers} from './mock';
import {StoresHolder} from '../storesHolder';
import {TReceiver} from '../../../types/tracks/tracksType';

export class TrackStore {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.receivers = [...mockReceivers, ...mockReceivers];
  }

  receivers: TReceiver[];
  currentReceiver: TReceiver | null = null;

  setCurrentReceiver = (data: TReceiver) => {
    this.currentReceiver = data;
  };
}
