import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

export default StyleSheet.create({
  topBarContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width,
  },
  topBarTitle: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Inter Regular',
  },
  topLeftContainer: {
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 15,
  },
  topRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  imgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    width: 30,
    height: 30,
  },
});
