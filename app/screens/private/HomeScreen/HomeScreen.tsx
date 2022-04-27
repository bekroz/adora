import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';
import BannerImg from '../../../assets/images/banner.png';
import MenuImg from '../../../assets/images/menu.png';
import SearchImg from '../../../assets/images/search.png';
import BagImg from '../../../assets/images/bag.png';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={BannerImg}>
      <View style={styles.topBarContainer}>
        <Image source={MenuImg} style={styles.topLeftContainer} />
        <Text style={styles.homeTitle}>ADORA</Text>
        <View style={styles.topRightContainer}>
          <Image source={SearchImg} style={{ marginRight: 15 }} />
          <Image source={BagImg} style={{ marginRight: 15 }} />
        </View>
      </View>
      <TouchableOpacity style={styles.exploreBtn}>
        <Text style={styles.explore}>Explore collection</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
