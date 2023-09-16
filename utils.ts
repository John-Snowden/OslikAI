import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const realWidth: number = height > width ? width : height;

const comparingScreenWidth: number = 375;

export const normalize = (size: number): number => {
  return Math.round((size * realWidth) / comparingScreenWidth);
};
