/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from './src/screens';

const App = () => {
  const {safeAreaView} = styles;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={safeAreaView}>
        <MainApp />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default App;
