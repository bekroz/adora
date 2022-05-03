import React from 'react';
import RN from '../../../components/common/React/react-native';
import { ImageSourcePropType } from 'react-native';
import styles from './styles';
import CONSTANT_DATA from '../../../constants/data';

interface ArrivalProps {
  name: string;
  imgUri: ImageSourcePropType;
  description: string;
  price: number;
}

const renderCategoryTitles = () => {
  return CONSTANT_DATA.arrivalCategories.map(title => (
    <RN.View key={title} style={styles.categoryTitle}>
      <RN.Text>{title}</RN.Text>
    </RN.View>
  ));
};

const renderArrivals = ({ name, imgUri, description, price }: ArrivalProps) => (
  <RN.View key={name} style={styles.arrivalContainer}>
    <RN.Image source={imgUri} style={styles.modelImg} />
    <RN.View style={styles.infoContainer}>
      <RN.Text style={styles.description}>{description}</RN.Text>
      <RN.Text style={styles.price}>${price}</RN.Text>
    </RN.View>
  </RN.View>
);

const ArrivalScreen: React.FC = () => {
  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.topTitle}>{CONSTANT_DATA.arrivalTitle}</RN.Text>
      <RN.View style={styles.categoryTitlesContainer}>
        {renderCategoryTitles()}
      </RN.View>

      <RN.FlatList
        data={CONSTANT_DATA.arrivalsList}
        renderItem={({ item }) => renderArrivals(item)}
        contentContainerStyle={styles.imgScrollContainer}
        numColumns={2}
      />
      <RN.TouchableOpacity style={styles.exploreMoreBtn}>
        <RN.Text style={styles.exploreMore}>
          {CONSTANT_DATA.exploreMore}
        </RN.Text>
        <RN.Image
          source={require('../../../assets/images/arrow-right.png')}
          style={styles.arrowRightImg}
        />
      </RN.TouchableOpacity>
    </RN.View>
  );
};

export default ArrivalScreen;
