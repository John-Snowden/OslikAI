import {StyleSheet} from 'react-native';
import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(50),
    paddingVertical: normalize(4),
    borderBottomWidth: 1,
    borderColor: Themes.asphalt,
  },
  row: {
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
    left: normalize(10),
  },
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(14),
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '600',
    color: Themes.white,
  },
  text: {
    textAlign: 'center',
    fontSize: normalize(14),
    fontWeight: '600',
    color: Themes.white,
  },
  margLeft: {marginLeft: normalize(12)},
  newRouteBox: {
    position: 'absolute',
    right: normalize(18),
    width: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(32),
    borderRadius: normalize(6),
    paddingLeft: normalize(6),
    paddingRight: normalize(7),
    backgroundColor: Themes.gray4a,
  },
  active: {backgroundColor: Themes.lightBlue},
  routesBox: {flex: 1},
  line: {
    position: 'absolute',
    top: normalize(-6),
    left: normalize(6),
    height: normalize(28),
    width: normalize(2),
    transform: [{rotate: '45deg'}],
    backgroundColor: Themes.white,
  },
  disconnected: {position: 'absolute', right: normalize(18)},
});
