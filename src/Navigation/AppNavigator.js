import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    createStackNavigator,
} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
const App = createStackNavigator();
const AppNavigator = () => {

    return (
        <App.Navigator
            initialRouteName="bottomtab"
            screenOptions={{ headerShown: false }}>
            <App.Screen name="bottomtab" component={BottomNavigation} />

        </App.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})