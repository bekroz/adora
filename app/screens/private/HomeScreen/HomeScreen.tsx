import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import BannerImg from '../../../assets/images/banner.png'
import MenuSvg from '../../../assets/svg/menu.svg'
import SvgUri from 'react-native-svg-uri';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Text>Menu</Text>
        <View style={styles.homeTitleContainer}>
            <Text style={styles.homeTitle}>Open Fashion</Text>
        </View>
      </View>
      
      <Image source={BannerImg}  />
      <View style={styles.exploreBtn}>
      <Text style={styles.explore}>Explore collection</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
