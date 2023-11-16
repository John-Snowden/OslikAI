export type TReceiver = {
  id: string;
  receiverName: string;
  receiverGps: string;
  latestPackage: string;
  senders: TSender[];
  date: string;
};

export type TSender = {
  id: string;
  senderName: string;
  senderGps: string;
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
