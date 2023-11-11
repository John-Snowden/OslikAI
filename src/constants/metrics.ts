import {Dimensions} from 'react-native';
import {normalize} from '../../utils';

export const headerHeight = normalize(56);

export const softBar =
  Dimensions.get('screen').height - Dimensions.get('window').height;

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
