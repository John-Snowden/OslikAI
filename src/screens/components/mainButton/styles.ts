import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingVertical: normalize(12),
    backgroundColor: Themes.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(8),
    marginBottom: normalize(12),
  },
  title: {
    fontSize: normalize(14),
    color: Themes.white,
  },
  disabled: {backgroundColor: Themes.grayf4},
});
