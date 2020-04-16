/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const {safeAreaView} = styles;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={safeAreaView}>
        <Text>sdg app</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default App;
