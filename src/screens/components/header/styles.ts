import {StyleSheet} from 'react-native';
import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Themes.blue23,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: normalize(12),
    paddingLeft: normalize(20),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: Themes.white,
  },
});
