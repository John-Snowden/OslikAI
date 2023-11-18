export type TReceiver = {
  id: string;
  name: string;
  gps: string;
  latestPackage: string;
  senders: TSender[];
  date: string;
};

export type TSender = {
  id: string;
  name: string;
  gps: string;
  date: string;
  images: string[];
  duration: string;
  latestPackage: string;
  route: TTask[];
};

export type TTask = {
  id: string;
  distance: number;
  degree: number;
  speed: number;
  timeout: number;
};
