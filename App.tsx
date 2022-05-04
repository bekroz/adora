import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Components from './app/components';

import {
  // ProductsScreen,
  ArrivalScreen,
  // HomeScreen,
} from './app/screens/private';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        animated={true}
        backgroundColor={'#000000'}
      />
      <Components.TopBarButtons />
      <ArrivalScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
