import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import { DUMMY_PAGE_LIST, PRODUCTS_LIST } from '../../../constants/data';
import {
  DividerImg,
  DropdownImg,
  Filter,
  Grid,
  HeartImg,
  InstagramImg,
  NextPageArrowImg,
  StarImg,
  TwitterImg,
  YouTubeImg,
} from '../../../constants/img';
import styles from './styles';

interface ProductProps {
  imgUri: ImageSourcePropType;
  name: string;
  description: string;
  price: number;
  rating: number;
}

const renderProduct = (
  { imgUri, name, description, price, rating }: ProductProps,
  index: number,
) => {
  return (
    <View key={index} style={styles.productContainer}>
      <Image source={imgUri} />
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text>{description}</Text>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.ratingContainer}>
          <Image source={StarImg} style={styles.star} />
          <Text>{rating} Ratings</Text>
        </View>
        <View style={styles.bottomBtnContainer}>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>Size</Text>
            <TouchableOpacity style={styles.sizeBtn}>
              <Text style={styles.sizeBtnText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeBtn}>
              <Text style={styles.sizeBtnText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeBtn}>
              <Text style={styles.sizeBtnText}>L</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.likeBtn}>
            <Image source={HeartImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ProductsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Text style={styles.topText}>4500 Apparel</Text>
        <View style={styles.topRightButtonsContainer}>
          <TouchableOpacity style={[styles.topBtn, styles.categoryBtn]}>
            <Text style={styles.categoryText}>New</Text>
            <Image source={DropdownImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}>
            <Image source={Grid} style={styles.topIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}>
            <Image source={Filter} style={styles.topIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={PRODUCTS_LIST}
        renderItem={({ item, index }) => renderProduct(item, index)}
        ListFooterComponent={() => (
          <View style={styles.productListBottomContainer}>
            <View style={styles.pageContainer}>
              {DUMMY_PAGE_LIST.map(page => (
                <TouchableOpacity key={page} style={styles.pageBtn}>
                  <Text style={styles.pageText}>{page}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity>
                <Image source={NextPageArrowImg} style={styles.nextPageArrow} />
              </TouchableOpacity>
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity>
                <Image source={TwitterImg} style={styles.socialBtnStyle} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={InstagramImg} style={styles.socialBtnStyle} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={YouTubeImg} style={styles.socialBtnStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
              <Image source={DividerImg} style={styles.divider} />
              <Text>bekrozdev@gmail.com</Text>
              <Text>+998 90 416 28 97</Text>
              <Text>09:00 ~ 20:00 - Everyday</Text>
              <Image source={DividerImg} style={styles.divider} />
              <View style={styles.linkContainer}>
                <Text style={styles.link}>About</Text>
                <Text style={styles.link}>Contact</Text>
                <Text style={styles.link}>Blog</Text>
              </View>
              <View style={styles.copyrightContainer}>
                <Text>Copyright© OpenUI All Rights Reserved.</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
