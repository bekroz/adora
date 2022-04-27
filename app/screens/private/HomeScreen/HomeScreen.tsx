import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { BannerImg, MenuImg, SearchImg, BagImg } from '../../../constants/img';
import { EXLORE_BUTTON_TITLE } from '../../../constants/data';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground style={styles.imgContainer} source={BannerImg}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.topLeftContainer}>
          <Image source={MenuImg} />
        </TouchableOpacity>
        <Text style={styles.homeTitle}>ADORA</Text>
        <View style={styles.topRightContainer}>
          <TouchableOpacity style={styles.imgStyle}>
            <Image source={SearchImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgStyle}>
            <Image source={BagImg} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.exploreBtn}>
        <Text style={styles.explore}>{EXLORE_BUTTON_TITLE}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
