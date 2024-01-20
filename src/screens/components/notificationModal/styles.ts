import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
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
    height: normalize(260),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    borderRadius: normalize(8),
    paddingVertical: normalize(18),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Themes.grayf4,
  },
  line: {
    position: 'absolute',
    top: normalize(-6),
    left: normalize(6),
    height: normalize(28),
    width: normalize(2),
    transform: [{rotate: '45deg'}],
    backgroundColor: Themes.grayf4,
  },
  disconnected: {
    position: 'absolute',
    right: normalize(18),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(44),
    paddingHorizontal: normalize(12),
    backgroundColor: Themes.lightBlue,
  },
});
