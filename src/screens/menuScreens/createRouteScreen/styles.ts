import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils';
import {Themes} from '../../../../Theme';
import {SCREEN_HEIGHT, statusBar} from '../../../constants';

export const styles = StyleSheet.create({
  screen1: {
    height: SCREEN_HEIGHT - statusBar,
  },
  screen2: {
    height: SCREEN_HEIGHT - statusBar,
  },
  flex: {flex: 1},
  inputsWrapper: {
    marginTop: normalize(6),
    marginHorizontal: normalize(18),
    paddingVertical: normalize(20),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.grayf4,
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
    marginTop: normalize(26),
    marginLeft: normalize(20),
    marginHorizontal: normalize(12),
  },
  receiverBox: {
    height: normalize(54),
    flexDirection: 'row',
    backgroundColor: Themes.gray4a,
    marginRight: normalize(4),
    borderRadius: normalize(8),
    padding: normalize(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Themes.gray60,
  },
  content: {
    marginTop: normalize(6),
    paddingBottom: normalize(20),
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: normalize(18),
    marginTop: normalize(6),
  },
  bttn: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(8),
    alignItems: 'center',
    backgroundColor: Themes.gray4a,
  },
  newBttn: {
    flexDirection: 'row',
    padding: normalize(12),
    borderRadius: normalize(8),
    borderWidth: 1,
    backgroundColor: Themes.gray4a,
    borderColor: Themes.gray60,
  },
  receiverWrapper: {
    marginTop: normalize(24),
    paddingHorizontal: normalize(18),
  },
  footer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    height: normalize(80),
    bottom: 0,
    borderTopLeftRadius: normalize(8),
    borderTopRightRadius: normalize(8),
    backgroundColor: Themes.blue3b,
  },
  confirmButton: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 0,
    backgroundColor: Themes.lightBlue,
  },
  photo: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(6),
    marginHorizontal: normalize(8),
  },
});
