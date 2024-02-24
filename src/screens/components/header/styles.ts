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
    paddingHorizontal: normalize(4),
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
  menu: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: normalize(30),
    width: normalize(46),
    borderRadius: normalize(6),
    paddingLeft: normalize(6),
    paddingRight: normalize(7),
    marginRight: normalize(18),
    backgroundColor: Themes.lightBlue,
  },
  active: {backgroundColor: Themes.lightBlue},
  line: {
    position: 'absolute',
    top: normalize(-5),
    left: normalize(4),
    height: normalize(22),
    width: normalize(2),
    transform: [{rotate: '45deg'}],
    backgroundColor: Themes.red,
  },
  connectionButton: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(8),
    marginHorizontal: normalize(6),
  },
});
