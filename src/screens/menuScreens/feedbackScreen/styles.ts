import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(12),
  },
  tgBox: {
    flexDirection: 'row',
    marginVertical: normalize(8),
    marginBottom: normalize(24),
  },
  text: {
    fontSize: normalize(14),
    color: Themes.white,
  },
  margLeft: {marginLeft: normalize(8)},
});
