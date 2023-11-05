export type TReceiver = {
  id: string;
  receiverName: string;
  receiverGps: string;
  latestPackage: string;
  routes: TRoute[];
  date: string;
};

export type TRoute = {
  id: string;
  senderName: string;
  senderGps: string;
  date: string;
  img1: string;
  img2: string;
  duration: string;
};
