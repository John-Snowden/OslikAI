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
    marginBottom: normalize(12),
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
  cancel: {
    marginTop: normalize(14),
    backgroundColor: Themes.gray4a,
  },
});
