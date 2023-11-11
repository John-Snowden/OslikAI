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
  comment: string;
  duration: string;
  latestPackage: string;
};
