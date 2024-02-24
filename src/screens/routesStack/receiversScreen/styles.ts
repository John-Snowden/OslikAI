import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  noDataBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(14),
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
    color: Themes.grayf4,
  },
  newButton: {
    width: normalize(80),
    height: normalize(48),
    position: 'absolute',
    left: 0,
  },
  addRoute: {
    position: 'absolute',
    right: normalize(12),
    bottom: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: normalize(8),
    borderRadius: normalize(8),
    padding: normalize(6),
  },
  addRouteBox: {
    width: normalize(44),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(8),
    marginLeft: normalize(8),
    backgroundColor: Themes.lightBlue,
  },
});
