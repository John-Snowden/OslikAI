import {TTask} from '../routeTypes';

export type TClient = {
  pending: {
    routes: TTask[][];
    modified: number;
  };
  recorded: {modified: number};
};

export type TServer = {
  pending: {modified: number};
  recorded: {
    routes: TTask[][];
    modified: number;
  };
};
