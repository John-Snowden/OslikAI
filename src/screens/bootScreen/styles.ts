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
    width: normalize(14),
    height: normalize(36),
    borderRadius: normalize(6),
    marginHorizontal: normalize(4),
    borderWidth: 1,
    borderColor: Themes.red,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Themes.red,
    elevation: 20,
  },
  oslikBody: {
    justifyContent: 'center',
    width: normalize(90),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.mudBlue,
    backgroundColor: Themes.black + '4D',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(80),
    top: normalize(6),
    fontWeight: '600',
    color: Themes.white,
  },
  absolute: {position: 'absolute'},
});
