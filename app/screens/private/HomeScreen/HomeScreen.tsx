import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import BannerImg from '../../../assets/images/banner.png'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
            <Text>Menu</Text>
            <Text style={styles.homeTitle}>Open Fashion</Text>
            <View>
            <Text>Search</Text>
            <Text>Bag</Text>
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
