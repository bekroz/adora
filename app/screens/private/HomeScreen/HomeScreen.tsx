import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { BannerImg } from '../../../constants/img';
import { EXLORE_BUTTON_TITLE } from '../../../constants/data';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground style={styles.imgContainer} source={BannerImg}>
      <TouchableOpacity style={styles.exploreBtn}>
        <Text style={styles.explore}>{EXLORE_BUTTON_TITLE}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
