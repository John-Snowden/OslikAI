export type TReceiver = {
  id: string;
  name: string;
  gps: string;
  senders: TSender[];
  date: Date;
};

export type TSender = {
  id: string;
  name: string;
  gps: string;
  date: Date;
  images: string[];
  duration: number;
  route: TTask[];
  comment: string;
};

export type TTask = {
  id: string;
  distance: number;
  degree: number;
  speed: number;
  timeout: number;
};
