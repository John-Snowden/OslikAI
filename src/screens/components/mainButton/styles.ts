import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';

export const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingVertical: normalize(12),
    backgroundColor: Themes.blue3a,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(8),
    marginBottom: normalize(12),
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
  },
});
