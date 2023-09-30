export type TReceiver = {
  title: string;
  gps: string;
  latestPackage: string;
  routes: TTrack[];
};

export type TTrack = {
  title: string;
  gpsA: string;
  gpsB: string;
  date: string;
  img1: string;
  img2: string;
  duration: string;
};
