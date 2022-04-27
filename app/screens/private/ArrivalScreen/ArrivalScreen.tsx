import { FlatList, Image, ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import {
  ARRIVALS_LIST,
  ARRIVAL_CATEGORIES,
  ARRIVAL_TITLE,
  EXPLORE_MORE,
} from '../../../constants/data';
import { TouchableOpacity } from 'react-native';

interface ArrivalProps {
  name: string;
  imgUri: ImageSourcePropType;
  description: string;
  price: number;
}

const renderCategoryTitles = () => {
  return ARRIVAL_CATEGORIES.map(title => (
    <View key={title} style={styles.categoryTitle}>
      <Text>{title}</Text>
    </View>
  ));
};

const renderArrivals = ({ name, imgUri, description, price }: ArrivalProps) => (
  <View key={name} style={styles.arrivalContainer}>
    <Image source={imgUri} style={styles.modelImg} />
    <View style={styles.infoContainer}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  </View>
);

const ArrivalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topTitle}>{ARRIVAL_TITLE}</Text>
      <View style={styles.categoryTitlesContainer}>
        {renderCategoryTitles()}
      </View>

      <FlatList
        data={ARRIVALS_LIST}
        renderItem={({ item }) => renderArrivals(item)}
        contentContainerStyle={styles.imgScrollContainer}
        numColumns={2}
      />
      <TouchableOpacity style={styles.exploreMoreBtn}>
        <Text style={styles.exploreMore}>{EXPLORE_MORE}</Text>
        <Image
          source={require('../../../assets/images/arrow-right.png')}
          style={styles.arrowRightImg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ArrivalScreen;
