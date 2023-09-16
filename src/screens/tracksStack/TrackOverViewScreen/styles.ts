import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: normalize(16),
  },

  receiverCard: {
    backgroundColor: Themes.red,
    height: normalize(50),
    width: normalize(50),
  },
  mainImage: {
    height: normalize(150),
    backgroundColor: 'red',
    borderRadius: normalize(8),
    marginBottom: normalize(8),
  },
  imgButton: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(8),
  },
  imgButtonWrapper: {
    flexDirection: 'row',
  },
  margRight: {
    marginRight: normalize(4),
  },
  commBox: {
    marginVertical: normalize(24),
  },
  text: {
    fontSize: normalize(14),
    color: Themes.white,
  },
  numbBox: {
    width: normalize(80),
    height: normalize(60),
    borderRadius: normalize(8),
    backgroundColor: Themes.blue3a,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'red',
  },
});
