import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputsWrapper: {
    marginTop: normalize(6),
    marginBottom: normalize(24),
    marginHorizontal: normalize(18),
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
    fontSize: normalize(14),
    color: Themes.white,
  },
  box: {
    marginLeft: normalize(26),
    marginHorizontal: normalize(12),
  },
  receiverBox: {
    height: normalize(54),
    flexDirection: 'row',
    backgroundColor: Themes.gray4a,
    marginHorizontal: normalize(4),
    borderRadius: normalize(8),
    padding: normalize(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Themes.gray60,
  },
  content: {
    marginTop: normalize(6),
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(20),
    alignItems: 'center',
  },
  newBttn: {
    height: normalize(54),
    padding: normalize(8),
    borderRadius: normalize(8),
    borderWidth: 1,
    backgroundColor: Themes.gray4a,
    borderColor: Themes.gray60,
  },
});
