import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    height: normalize(70),
    alignItems: 'center',
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
    paddingLeft: normalize(12),
    width: '80%',
    height: normalize(40),
    borderRadius: normalize(6),
    backgroundColor: Themes.grayf4,
  },
});
