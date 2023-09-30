import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  receiverCard: {
    backgroundColor: Themes.gray4a,
    padding: normalize(16),
    paddingLeft: normalize(12),
    marginBottom: normalize(10),
    marginHorizontal: normalize(18),
    borderRadius: normalize(8),
  },
  title: {
    fontSize: normalize(20),
    color: Themes.white,
  },
  gps: {
    fontSize: normalize(12),
    color: Themes.grayc7,
    alignSelf: 'center',
  },
  gpsTitle: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: Themes.white,
  },
  gpsBox: {
    width: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(18),
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    alignItems: 'center',
    height: normalize(50),
    backgroundColor: Themes.asphalt,
    borderRadius: normalize(6),
    elevation: 6,
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(18),
  },
  gpsWrapper: {
    flexDirection: 'row',
    width: '60%',
    marginVertical: normalize(12),
    paddingVertical: normalize(12),
    borderRadius: normalize(6),
    backgroundColor: Themes.asphalt + '45',
  },
});
