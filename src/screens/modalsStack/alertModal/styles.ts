import {StyleSheet} from 'react-native';
import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  transperent: {
    flex: 1,
    backgroundColor: Themes.black,
    opacity: 0.1,
  },
  contentBox: {
    backgroundColor: Themes.blue23,
    alignItems: 'center',
    paddingVertical: normalize(12),
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
    paddingBottom: normalize(16),
  },
  whiteButton: {
    backgroundColor: Themes.white,
  },
  blueText: {
    color: Themes.blue23,
  },
});
