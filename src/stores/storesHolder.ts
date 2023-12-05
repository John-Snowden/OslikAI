import {makeAutoObservable} from 'mobx';
import {FsStore} from './fsStore/fsStore';
import {RouteStore} from './routeStore/routeStore';
import {CrossAppStore} from './crossAppStore/crossAppStore';

export class StoresHolder {
  public routeStore: RouteStore;
  public crossAppStore: CrossAppStore;
  public fsStore: FsStore;

  constructor() {
    this.routeStore = makeAutoObservable(new RouteStore(this));
    this.crossAppStore = makeAutoObservable(new CrossAppStore(this));
    this.fsStore = makeAutoObservable(new FsStore(this));
  }
}
export const stores = new StoresHolder();
