import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  containerStyle: {
    alignItems: 'center',
    paddingTop: normalize(24),
    paddingBottom: normalize(40),
  },
  taskWrapper: {
    width: '90%',
    backgroundColor: Themes.blue3b,
    padding: normalize(8),
    marginBottom: normalize(18),
    marginHorizontal: normalize(18),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: Themes.grayf4,
    elevation: 4,
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBox: {
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(6),
    backgroundColor: Themes.grayf4,
    padding: normalize(12),
  },
  deleteButton: {
    borderRadius: normalize(6),
    padding: normalize(14),
    justifyContent: 'center',
    backgroundColor: Themes.grayf4,
  },

  createdAt: {
    fontSize: normalize(12),
    marginTop: normalize(8),
    color: Themes.white,
  },

  text: {
    fontSize: normalize(12),
    marginHorizontal: normalize(8),
    color: Themes.white,
  },

  content: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: normalize(16),
    borderRadius: normalize(6),
    marginHorizontal: normalize(12),
    backgroundColor: Themes.grayf4,
  },

  flagButton: {
    width: normalize(44),
    height: normalize(30),
    borderRadius: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Themes.lightBlue,
  },

  footer: {
    width: '90%',
  },

  addWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: normalize(6),
  },
});
