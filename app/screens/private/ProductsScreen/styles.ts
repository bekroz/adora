import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  topText: {
    color: '#333333',
    fontSize: 14,
    fontweight: '400',
    textTransform: 'uppercase',
    left: -10,
  },
  topRightButtonsContainer: {
    flexDirection: 'row',
    // alignSelf: 'flex-end',
  },
  categoryBtn: {
    width: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    paddingHorizontal: 15,
    marginRight: 5,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    borderRadius: 50,
  },
  categoryText: {
    color: '#000000',
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
  },
  topIcon: {
    tintColor: '#000000',
  },
  // Products
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  productName: {
    color: '#000000',
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  price: {
    color: '#DD8560',
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  productDetailsContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  star: {
    marginRight: 5,
  },
  bottomBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeText: {
    marginRight: 5,
  },
  sizeBtn: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  sizeBtnText: {
    color: '#000000',
    fontFamily: 'Tenor Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  likeBtn: {
    marginHorizontal: 10,
  },
});
