import {TReceiver, TSender} from '../../types/tracks/tracksType';

const mockTask1 = {
  id: '0',
  distance: 1000,
  degree: 45,
  speed: 1,
  timeout: 0,
};

const mockData: TSender[] = [
  {
    id: '0',
    senderName: 'Склад',
    senderGps: '1341.243456.786',
    date: '21.03.23',
    images: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11175/18595',
      'https://i.pinimg.com/originals/c5/6f/35/c56f35bcc810982386417ec80b2156c6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwxCBe6rHmiITuIGbaxDrazAFCRxokKFV_Ng05itbdnMQbgXcScwP-xhhtPz5hwFysJs&usqp=CAU',
    ],
    latestPackage: 'шоколад, чай',
    duration: '01.15',
    route: [mockTask1],
  },
  {
    id: '1',
    senderName: 'База',
    senderGps: '876.98.234',
    date: '12.02.23',
    images: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11175/18595',
      'https://i.pinimg.com/originals/c5/6f/35/c56f35bcc810982386417ec80b2156c6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwxCBe6rHmiITuIGbaxDrazAFCRxokKFV_Ng05itbdnMQbgXcScwP-xhhtPz5hwFysJs&usqp=CAU',
    ],
    latestPackage:
      'бк, банки х30, дш 12м, окопники 4шт, бензин 12л, мелицина, мини-бензопила, запалы',
    duration: '00.50',
    route: [mockTask1],
  },
  {
    id: '2',
    senderName: 'Точка',
    senderGps: '3456.87654.08',
    date: '01.012.23',
    images: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11175/18595',
      'https://i.pinimg.com/originals/c5/6f/35/c56f35bcc810982386417ec80b2156c6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwxCBe6rHmiITuIGbaxDrazAFCRxokKFV_Ng05itbdnMQbgXcScwP-xhhtPz5hwFysJs&usqp=CAU',
    ],
    latestPackage: '',
    duration: '02.10',
    route: [mockTask1],
  },
];

export const mockReceivers: TReceiver[] = [
  {
    id: '0',
    receiverName: 'Кабан1',
    receiverGps: '1341.243456.786',
    latestPackage: 'шоколад, чай',
    senders: mockData,
    date: '20.02.2022',
  },
  {
    id: '1',
    receiverName: 'Кабан2',
    receiverGps: '876.98.234',
    latestPackage:
      'бензин, маск сеть, БК, шансовый инструмент, вода, аптечка, сух паек, рация, кабель, трос, скотч, шоколад, чай',
    senders: mockData,
    date: '13.03.2022',
  },
  {
    id: '2',
    receiverName: 'Пухлый',
    receiverGps: '3456.87654.08',
    latestPackage: '',
    senders: mockData,
    date: '06.07.2022',
  },
];
