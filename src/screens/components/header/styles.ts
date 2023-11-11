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
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(18),
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
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(32),
    borderRadius: normalize(6),
    paddingHorizontal: normalize(6),
    backgroundColor: Themes.gray4a,
  },
  active: {backgroundColor: Themes.red},
  routesBox: {flex: 1},
});
