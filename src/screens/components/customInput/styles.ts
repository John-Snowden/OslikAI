import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    marginVertical: normalize(4),
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: normalize(38),
    marginBottom: normalize(4),
    fontSize: normalize(12),
    color: Themes.white,
  },
  input: {
    color: Themes.white,
    width: '80%',
    height: normalize(40),
    fontSize: normalize(14),
    borderRadius: normalize(6),
    textAlign: 'center',
    backgroundColor: Themes.gray4a,
  },
  leftAligned: {
    paddingLeft: normalize(16),
    textAlign: 'left',
  },
});
