import {StyleSheet} from 'react-native';
import {Themes} from '../../../Theme';
import {normalize} from '../../../utils';

export const offsetX = normalize(40);

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oslik: {flexDirection: 'row'},
  wheelBox: {
    height: normalize(140),
    justifyContent: 'space-between',
  },
  wheel: {
    width: normalize(12),
    height: normalize(36),
    borderRadius: normalize(6),
    marginHorizontal: normalize(4),
    backgroundColor: Themes.red,
  },
  oslikBody: {
    paddingBottom: normalize(12),
    width: normalize(90),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.mudBlue,
    backgroundColor: Themes.blue3a,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: Themes.white,
  },
  title: {
    fontSize: normalize(40),
    top: normalize(6),
    fontWeight: '600',
    color: Themes.white,
  },
  absolute: {position: 'absolute'},
});
