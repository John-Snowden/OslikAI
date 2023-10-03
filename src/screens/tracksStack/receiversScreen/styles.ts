import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  receiverCard: {
    backgroundColor: Themes.gray4a,
    justifyContent: 'center',
    padding: normalize(16),
    marginBottom: normalize(18),
    marginHorizontal: normalize(18),
    borderRadius: normalize(8),
    elevation: 8,
  },
  title: {
    fontSize: normalize(20),
    color: Themes.white,
    marginLeft: normalize(8),
  },
  gps: {
    fontSize: normalize(12),
    color: Themes.white,
    alignSelf: 'center',
  },
  gpsTitle: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: Themes.white,
  },
  gpsBox: {
    width: normalize(50),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(18),
    borderRadius: normalize(6),
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    alignSelf: 'stretch',
    height: normalize(50),
    borderRadius: normalize(6),
  },
  margLeft: {
    flex: 1,
    marginLeft: normalize(4),
    justifyContent: 'center',
    paddingHorizontal: normalize(8),
    backgroundColor: Themes.asphalt + '59',
  },
  buttonBox: {
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(6),
    backgroundColor: Themes.asphalt + '59',
    paddingHorizontal: normalize(8),
    marginRight: normalize(8),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(16),
    alignItems: 'center',
    marginBottom: normalize(12),
  },
  gpsWrapper: {
    flexDirection: 'row',
    width: '60%',
    borderRadius: normalize(6),
    backgroundColor: Themes.asphalt + '59',
  },
  contentStyle: {
    paddingVertical: normalize(24),
  },

  deleteButton: {
    borderRadius: normalize(6),
    padding: normalize(14),
    backgroundColor: Themes.asphalt + '59',
  },
  lastPackageBox: {
    flexDirection: 'row',
    marginHorizontal: normalize(4),
    marginVertical: normalize(2),
  },
  cardBox: {
    height: normalize(56),
  },
});
