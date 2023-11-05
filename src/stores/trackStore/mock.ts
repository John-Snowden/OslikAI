import {TReceiver, TRoute} from '../../types/tracks/tracksType';

const mockData: TRoute[] = [
  {
    id: '0',
    senderName: 'Склад',
    senderGps: '1341.243456.786',
    date: '21.03.23',
    img1: 'https://static.tildacdn.com/tild3639-3835-4334-b764-306266326237/dem3.jpg',
    img2: 'https://topogis.ru/wp-content/uploads/2019/01/04.jpg',
    duration: '01.15',
  },
  {
    id: '1',
    senderName: 'База',
    senderGps: '876.98.234',
    date: '12.02.23',
    img1: 'https://static.tildacdn.com/tild3639-3835-4334-b764-306266326237/dem3.jpg',
    img2: 'https://fsd.videouroki.net/products/conspekty/geo6/10-znachieniie-planov-miestnosti-i-ghieoghrafichieskikh-kart.files/image001.jpg',
    duration: '00.50',
  },
  {
    id: '2',
    senderName: 'Точка',
    senderGps: '3456.87654.08',
    date: '01.012.23',
    img1: 'https://de-ussr.com/uploads/images/t1/t1_019.jpg',
    img2: 'https://i0.wp.com/s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/26004027049/original/5pOa4AH2jMebWiIGciFMO2smx5-Aqje56w.png',
    duration: '02.10',
  },
];

export const mockReceivers: TReceiver[] = [
  {
    id: '0',
    receiverName: 'Кабан1',
    receiverGps: '1341.243456.786',
    latestPackage: 'шоколад, чай',
    routes: mockData,
    date: '20.02.22',
  },
  {
    id: '1',
    receiverName: 'Кабан2',
    receiverGps: '876.98.234',
    latestPackage:
      'бензин, маск сеть, БК, шансовый инструмент, вода, аптечка, сух паек, рация, кабель, трос, скотч, шоколад, чай',
    routes: mockData,
    date: '13.03.22',
  },
  {
    id: '2',
    receiverName: 'Пухлый',
    receiverGps: '3456.87654.08',
    latestPackage: '',
    routes: mockData,
    date: '06.07.22',
  },
];
