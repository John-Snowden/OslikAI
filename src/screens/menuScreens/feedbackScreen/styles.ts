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
    marginVertical: normalize(4),
  },
  text: {
    fontSize: normalize(14),
    color: Themes.white,
  },
  margLeft: {marginLeft: normalize(8)},
  sep: {
    width: '90%',
    height: normalize(2),
    borderRadius: normalize(6),
    marginTop: normalize(16),
    marginBottom: normalize(18),
    backgroundColor: Themes.gray4a,
    alignSelf: 'flex-start',
  },
});
