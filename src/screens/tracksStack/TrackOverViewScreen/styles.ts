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
    flex: 1,
    borderRadius: normalize(8),
  },
  imgButton: {
    width: normalize(60),
    height: normalize(60),
    marginTop: normalize(6),
    marginBottom: normalize(20),
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
    height: normalize(40),
    borderRadius: normalize(8),
    backgroundColor: Themes.blue3b,
    borderWidth: 1,
    borderColor: Themes.lightAsphalt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'red',
  },
  backTrackBox: {
    marginBottom: normalize(6),
  },
});
