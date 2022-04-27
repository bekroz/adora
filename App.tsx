import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';


import {
  HomeScreen
} from './app/screens/private'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'#E6E9EE'} />
      <HomeScreen />
    </SafeAreaView>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAEF',
  }
})