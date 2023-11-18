import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  noDataBox: {
    paddingHorizontal: normalize(14),
  },
  text: {
    fontSize: normalize(14),
    alignSelf: 'center',
    color: Themes.white,
  },

  contentStyle: {
    paddingVertical: normalize(24),
  },
});
