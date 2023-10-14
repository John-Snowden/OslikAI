import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputsWrapper: {
    marginTop: normalize(24),
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
    marginTop: normalize(18),
    marginHorizontal: normalize(12),
  },
  receiverBox: {
    flexDirection: 'row',
    backgroundColor: Themes.gray4a,
    marginVertical: normalize(8),
    marginHorizontal: normalize(12),
    borderRadius: normalize(4),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: '94%',
    alignSelf: 'center',
    marginTop: normalize(16),
    backgroundColor: Themes.white,
  },
  btnText: {color: Themes.black},
});
