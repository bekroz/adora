import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/theme';

export default StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  exploreBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'rgba(0,0,0,.5)',
    opacity: 0.9,
    borderRadius: 38,
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.08,
  },
  explore: {
    color: '#FCFCFC',
    // fontFamily: 'TenorSans Regular',
    fontWeight: '400',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
