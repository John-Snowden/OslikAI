import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: normalize(18),
    paddingBottom: normalize(40),
    paddingHorizontal: normalize(12),
  },
  sep: {
    width: '90%',
    height: normalize(2),
    borderRadius: normalize(6),
    marginTop: normalize(18),
    marginBottom: normalize(16),
    backgroundColor: Themes.gray4a,
    alignSelf: 'flex-start',
  },
  title: {
    color: Themes.white,
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  text: {
    color: Themes.white,
    fontSize: normalize(14),
  },
});
