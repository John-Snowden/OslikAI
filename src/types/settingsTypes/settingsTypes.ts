import {TTask} from '../routeTypes';

export type TSettings = {
  isConnected: boolean;
  isSafeRemove: boolean;
  recordedRoutes: TTask[][];
  pendingRoutes: TTask[][];
};
