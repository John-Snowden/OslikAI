import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils';
import {Themes} from '../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  title: {
    fontSize: normalize(20),
    color: Themes.white,
  },
  button: {
    marginHorizontal: normalize(4),
    marginVertical: normalize(4),
    padding: normalize(10),
  },
  header: {},
});
