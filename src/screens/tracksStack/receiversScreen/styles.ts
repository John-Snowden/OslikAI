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
    width: normalize(36),
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
    backgroundColor: Themes.asphalt + '59',
    borderRadius: normalize(6),
    paddingHorizontal: normalize(12),
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(18),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(16),
    alignItems: 'center',
  },
  gpsWrapper: {
    flexDirection: 'row',
    width: '60%',
    marginBottom: normalize(2),
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(6),
    backgroundColor: Themes.asphalt + '45',
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
    paddingTop: normalize(4),
  },
  cardBox: {
    height: normalize(56),
  },
});
