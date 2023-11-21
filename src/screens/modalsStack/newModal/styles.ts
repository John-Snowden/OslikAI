import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Themes.white,
    fontSize: normalize(14),
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Themes.black,
    opacity: 0.8,
  },
  contentWrapper: {
    backgroundColor: Themes.blue3b,
    width: '90%',
    justifyContent: 'center',
    borderRadius: normalize(8),
    paddingVertical: normalize(18),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Themes.lightAsphalt,
  },
});
