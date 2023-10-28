import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  title: {
    fontSize: normalize(20),
    color: Themes.white,
    marginBottom: normalize(8),
  },
  gps: {
    fontSize: normalize(12),
    color: Themes.white,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: Themes.gray4a,
    padding: normalize(16),
    paddingLeft: normalize(12),
    marginBottom: normalize(10),
    marginHorizontal: normalize(18),
    borderRadius: normalize(12),
    marginTop: normalize(8),
    elevation: 8,
  },
  image: {
    flex: 1,
  },
  imageBox: {
    flexDirection: 'row',
    height: normalize(150),
  },
  date: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: normalize(8),
  },
  contentStyle: {paddingVertical: normalize(24)},
  addButtom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
