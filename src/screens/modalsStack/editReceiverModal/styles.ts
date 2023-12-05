import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderRadius: normalize(8),
    paddingVertical: normalize(18),
    borderWidth: 1,
    borderColor: Themes.grayf4,
  },
  button: {
    alignSelf: 'center',
    marginTop: normalize(24),
  },
});
