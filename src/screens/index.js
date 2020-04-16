import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TargetScreen from './TargetScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Target" component={TargetScreen} />
    </Stack.Navigator>
  );
};

export default MainApp;
