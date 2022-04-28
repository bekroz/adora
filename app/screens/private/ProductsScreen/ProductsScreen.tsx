import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import { PRODUCTS_LIST } from '../../../constants/data';
import {
  DropdownImg,
  Filter,
  Grid,
  HeartImg,
  StarImg,
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
          <TouchableOpacity>
            <Image source={HeartImg} style={styles.likeBtn} />
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
      {/* Product */}
      <FlatList
        data={PRODUCTS_LIST}
        renderItem={({ item, index }) => renderProduct(item, index)}
        ListFooterComponent={() => (
          <View style={{ backgroundColor: 'red', height: 20 }}>
            <Text>231231</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
