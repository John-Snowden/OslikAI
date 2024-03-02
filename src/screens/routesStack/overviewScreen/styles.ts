import {StyleSheet} from 'react-native';

import {Themes} from '../../../../Theme';
import {normalize} from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: normalize(12),
    paddingTop: normalize(16),
    paddingBottom: normalize(26),
  },
  noPhotoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: normalize(8),
    borderColor: Themes.gray4a,
  },
  noPhotoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
    marginHorizontal: normalize(12),
    borderWidth: 1,
    borderRadius: normalize(8),
    borderColor: Themes.gray4a,
    backgroundColor: Themes.blue3b,
  },
  receiverCard: {
    backgroundColor: Themes.red,
    height: normalize(50),
    width: normalize(50),
  },
  mainImage: {
    flex: 1,
    borderRadius: normalize(8),
  },
  imgButton: {
    width: normalize(60),
    height: normalize(60),
    marginTop: normalize(6),
    marginBottom: normalize(20),
    borderRadius: normalize(8),
  },
  button: {
    height: normalize(30),
    width: normalize(60),
    borderRadius: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgButtonWrapper: {
    flexDirection: 'row',
  },
  margRight: {
    marginRight: normalize(6),
  },
  commBox: {
    marginVertical: normalize(24),
  },
  text: {
    fontSize: normalize(14),
    color: Themes.white,
  },
  textCenter: {
    marginTop: normalize(6),
    fontSize: normalize(14),
    color: Themes.white,
    textAlign: 'center',
  },
  numbBox: {
    height: normalize(50),
    minWidth: normalize(100),
    paddingHorizontal: normalize(14),
    borderRadius: normalize(8),
    backgroundColor: Themes.blue3b,
    borderWidth: 1,
    borderColor: Themes.grayf4,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: Themes.lightBlue,
  },
  backTrackBox: {
    marginTop: normalize(16),
    marginBottom: normalize(6),
  },
});
