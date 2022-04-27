import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import MainImage from '../../../assets/images/main.png'

const HomeScreen = () => {
  return (
    <View style={styles.homeTitleContainer}>
      <Text style={styles.homeTitle}>Open Fashion</Text>
      <Image source={MainImage}  />
    </View>
  );
};

export default HomeScreen;
