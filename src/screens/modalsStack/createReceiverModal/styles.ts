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
    width: '90%',
    borderRadius: normalize(8),
    paddingVertical: normalize(24),
    borderWidth: 1,
    backgroundColor: Themes.blue3b,
    borderColor: Themes.lightAsphalt,
  },
  confirmButton: {
    alignSelf: 'center',
    marginTop: normalize(24),
    backgroundColor: Themes.lightBlue,
  },
});
