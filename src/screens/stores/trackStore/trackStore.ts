import {mockData} from './mock';
import {StoresHolder} from '../storesHolder';
import {TTrack} from '../../../types/tracks/tracksType';

export class TrackStore {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.tracks = mockData;
  }

  tracks: TTrack[];
}
