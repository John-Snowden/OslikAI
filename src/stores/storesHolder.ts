import {makeAutoObservable} from 'mobx';
import {TrackStore} from './trackStore/trackStore';

export class StoresHolder {
  public trackStore: TrackStore;

  constructor() {
    this.trackStore = makeAutoObservable(new TrackStore(this));
  }
}
export const stores = new StoresHolder();
