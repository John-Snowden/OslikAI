import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  receiverCard: {
    backgroundColor: Themes.blue3b,
    justifyContent: 'center',
    padding: normalize(8),
    marginBottom: normalize(18),
    marginHorizontal: normalize(18),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.lightAsphalt,
    elevation: 4,
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
    marginHorizontal: normalize(8),
  },
  noDataBox: {
    paddingHorizontal: normalize(14),
  },
  text: {
    fontSize: normalize(14),
    alignSelf: 'center',
    color: Themes.white,
  },
  gps: {
    fontSize: normalize(12),
    marginHorizontal: normalize(8),
    color: Themes.white,
  },
  gpsTitle: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: Themes.white,
  },

  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: normalize(6),
    marginHorizontal: normalize(12),
    backgroundColor: Themes.grayf4,
  },
  margLeft: {
    flex: 1,
    marginLeft: normalize(4),
    justifyContent: 'center',
  },
  buttonBox: {
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(6),
    backgroundColor: Themes.grayf4,
    padding: normalize(12),
  },

  contentStyle: {
    paddingVertical: normalize(24),
  },

  deleteButton: {
    borderRadius: normalize(6),
    padding: normalize(14),
    justifyContent: 'center',
    backgroundColor: Themes.grayf4,
  },
  lastPackageBox: {
    flexDirection: 'row',
    marginTop: normalize(24),
    marginBottom: normalize(8),
    marginHorizontal: normalize(4),
  },
  cardBox: {
    height: normalize(66),
    borderRadius: normalize(6),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12),
    backgroundColor: Themes.grayf4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: normalize(6),
  },
  travelTime: {
    textAlign: 'left',
    marginLeft: normalize(6),
    color: Themes.white,
  },
  createdAt: {
    textAlign: 'right',
    color: Themes.lightAsphalt,
  },
});
