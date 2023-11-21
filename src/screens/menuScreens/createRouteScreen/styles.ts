import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputsWrapper: {
    marginTop: normalize(24),
    marginHorizontal: normalize(20),
    paddingVertical: normalize(20),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.lightAsphalt,
    backgroundColor: Themes.blue3b,
  },
  text: {
    fontSize: normalize(12),
    color: Themes.white,
  },
  title: {
    fontSize: normalize(16),
    color: Themes.white,
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(40),
    marginHorizontal: normalize(12),
  },
  receiverBox: {
    height: normalize(60),
    width: normalize(150),
    flexDirection: 'row',
    backgroundColor: Themes.gray4a,
    marginVertical: normalize(8),
    marginHorizontal: normalize(4),
    borderRadius: normalize(8),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Themes.lightAsphalt,
  },
  content: {
    paddingHorizontal: normalize(20),
  },
});
