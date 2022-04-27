import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topTitle: {
    fontFamily: 'TenorSans Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  categoryTitlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryTitle: {
    padding: 10,
    marginVertical: 10,
  },
  imgScrollContainer: {
    justifyContent: 'center',
  },
  arrivalContainer: {
    margin: 10,
  },
  modelImg: {
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  description: {
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    marginVertical: 5,
  },
  price: {
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    color: '#DD8560',
  },
  exploreMoreBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'rgba(0,0,0,.9)',
    opacity: 0.9,
    borderRadius: 38,
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.06,
  },
  exploreMore: {
    color: 'white',
    marginRight: 5,
  },
  arrowRightImg: {
    tintColor: 'white',
  },
});
