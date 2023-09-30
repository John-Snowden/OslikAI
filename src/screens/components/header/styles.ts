import {StyleSheet} from 'react-native';
import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: normalize(10),
    paddingLeft: normalize(6),
    paddingVertical: normalize(4),
    borderBottomWidth: 1,
    borderColor: Themes.asphalt,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: Themes.white,
  },
  margLeft: {marginLeft: normalize(12)},
});
