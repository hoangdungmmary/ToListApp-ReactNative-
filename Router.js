// src/App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/listpage';
import ListPage from './src/screen/HomeScreen';
const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListPage" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
