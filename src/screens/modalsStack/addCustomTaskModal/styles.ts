import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Themes.black,
    opacity: 0.8,
  },
  contentWrapper: {
    backgroundColor: Themes.blue3b,
    width: '90%',
    justifyContent: 'center',
    borderRadius: normalize(8),
    paddingVertical: normalize(18),
    borderWidth: 1,
    borderColor: Themes.grayf4,
  },
  cancelButton: {
    alignSelf: 'center',
    marginTop: normalize(20),
    backgroundColor: Themes.gray4a,
  },
  confirmButton: {
    alignSelf: 'center',
    backgroundColor: Themes.lightBlue,
  },
  saveRouteBox: {
    marginBottom: normalize(12),
  },
  text: {
    paddingLeft: normalize(6),
    marginBottom: normalize(4),
    fontSize: normalize(12),
    color: Themes.white,
  },
  inputGroup: {
    marginVertical: normalize(8),
    width: '90%',
  },
  inputsBox: {
    marginBottom: normalize(20),
  },
  input: {
    width: normalize(80),
  },
  row: {
    width: '86%',
    marginVertical: normalize(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
