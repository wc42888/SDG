import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TargetScreen from './TargetScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Target"
        component={TargetScreen}
        options={({route}) => ({title: route.params.goal.name})}
      />
    </Stack.Navigator>
  );
};

export default MainApp;
