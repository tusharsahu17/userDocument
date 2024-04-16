import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import Profile from '../Screens/Profile';
const App = createStackNavigator();
const AppNavigator = () => {
  return (
    <App.Navigator
      initialRouteName="bottomtab"
      screenOptions={{headerShown: false}}>
      <App.Screen name="bottomtab" component={BottomNavigation} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
