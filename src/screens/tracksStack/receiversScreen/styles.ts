import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  noDataBox: {
    paddingHorizontal: normalize(14),
  },
  text: {
    fontSize: normalize(14),
    alignSelf: 'center',
    color: Themes.white,
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
  createdAt: {
    textAlign: 'right',
    marginTop: normalize(6),
    color: Themes.lightAsphalt,
  },
  newButton: {
    width: normalize(80),
    height: normalize(48),
    position: 'absolute',
    left: 0,
  },
});
