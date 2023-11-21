import {makeAutoObservable} from 'mobx';
import {CrossAppStore} from './crossAppStore/crossAppStore';
import {TrackStore} from './trackStore/trackStore';

export class StoresHolder {
  public trackStore: TrackStore;
  public crossAppStore: CrossAppStore;

  constructor() {
    this.trackStore = makeAutoObservable(new TrackStore(this));
    this.crossAppStore = makeAutoObservable(new CrossAppStore(this));
  }
}
export const stores = new StoresHolder();
