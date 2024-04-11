import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Document from '../Screens/Document';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import More from '../Screens/More';
import History from '../Screens/History';
import Send from '../Screens/Send';
import {DARK_COLOR, PRIMARY_COLOR} from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const {width} = Dimensions.get('screen');
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: width,
          display: 'flex',
          height: 70,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Entypo
                  style={{
                    color: focused ? PRIMARY_COLOR : DARK_COLOR,
                    fontSize: 25,
                  }}
                  name="home"
                />
                <Text style={styles.textStyle}>Home</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Document"
        component={Document}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Entypo
                  style={{
                    color: focused ? PRIMARY_COLOR : DARK_COLOR,
                    fontSize: 25,
                  }}
                  name="text-document"
                />
                <Text style={styles.textStyle}>Documents</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Send"
        component={Send}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    padding: 15,
                    borderRadius: 50,
                    bottom: 35,
                    shadowColor: 'black',
                    shadowRadius: 50,
                    backgroundColor: 'white',

                    elevation: 5,
                  }}>
                  <Ionicons
                    style={{
                      color: focused ? PRIMARY_COLOR : 'grey',
                      fontSize: 30,
                    }}
                    name="infinite-sharp"
                  />
                </View>
                <Text style={[styles.textStyle, {bottom: 20}]}>Send</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <MaterialCommunityIcons
                  style={{
                    color: focused ? PRIMARY_COLOR : DARK_COLOR,
                    fontSize: 25,
                  }}
                  name="progress-clock"
                />
                <Text style={styles.textStyle}>History</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <MaterialCommunityIcons
                  style={{
                    color: focused ? PRIMARY_COLOR : DARK_COLOR,
                    fontSize: 25,
                  }}
                  name="dots-horizontal-circle-outline"
                />
                <Text style={styles.textStyle}>More</Text>
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
