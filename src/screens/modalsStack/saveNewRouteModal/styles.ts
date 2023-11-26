import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  newRouteWrapper: {
    flex: 1,
    marginHorizontal: normalize(24),
    marginTop: normalize(18),
    marginBottom: normalize(18),
  },
  pointWrapper: {
    marginVertical: normalize(12),
  },
  verticalSep: {
    width: 1,
    flex: 1,
    backgroundColor: Themes.gray4a,
  },
  title: {
    fontSize: normalize(14),
    color: Themes.white,
  },
});
