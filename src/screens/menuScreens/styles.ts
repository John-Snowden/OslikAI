import {StyleSheet} from 'react-native';

import {normalize} from '../../../utils';
import {Themes} from '../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonsWrapper: {
    paddingHorizontal: normalize(8),
    marginTop: normalize(20),
  },
  title: {
    fontSize: normalize(12),
    color: Themes.white,
    marginLeft: normalize(6),
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(12),
    marginVertical: normalize(6),
  },
});
