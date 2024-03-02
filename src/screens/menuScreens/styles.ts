import {StyleSheet} from 'react-native';

import {normalize} from '../../../utils';
import {Themes} from '../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {flexDirection: 'row'},
  buttonsWrapper: {
    paddingHorizontal: normalize(8),
    marginTop: normalize(20),
  },
  title: {
    fontSize: normalize(14),
    marginLeft: normalize(6),
    color: Themes.white,
  },
  grey: {color: Themes.lightAsphalt},
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(12),
    marginVertical: normalize(6),
    paddingVertical: normalize(6),
  },
  versionBox: {
    margin: normalize(16),
    alignSelf: 'flex-end',
  },
});
