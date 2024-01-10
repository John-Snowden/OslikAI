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
    borderColor: Themes.grayf4,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBox: {
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(6),
    backgroundColor: Themes.grayf4,
    padding: normalize(12),
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
  createdAt: {
    fontSize: normalize(12),
    textAlign: 'right',
    marginTop: normalize(8),
    color: Themes.white,
  },
  duration: {
    fontSize: normalize(12),
    marginTop: normalize(8),
    marginBottom: normalize(4),
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
  title: {
    fontSize: normalize(14),
    color: Themes.white,
    marginHorizontal: normalize(8),
  },
  commentBox: {
    marginTop: normalize(12),
    borderRadius: normalize(4),
    paddingVertical: normalize(12),
    paddingRight: normalize(12),
    backgroundColor: Themes.grayf4,
  },
});
