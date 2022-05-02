import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { BagImg, MenuImg, SearchImg } from '../../constants/img';
import styles from './styles';

const TopBarButtons = () => {
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity style={styles.topLeftContainer}>
        <Image source={MenuImg} />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>Adora</Text>
      <View style={styles.topRightContainer}>
        <TouchableOpacity style={styles.imgStyle}>
          <Image source={SearchImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgStyle}>
          <Image source={BagImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBarButtons;
