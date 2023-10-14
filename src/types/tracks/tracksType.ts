export type TReceiver = {
  receiverName: string;
  receiverGps: string;
  latestPackage: string;
  routes: TRoute[];
  date: string;
};

export type TRoute = {
  senderName: string;
  senderGps: string;
  date: string;
  img1: string;
  img2: string;
  duration: string;
};
