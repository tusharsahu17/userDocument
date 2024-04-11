import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  LIGHT_PRIMARY_COLOR,
  PRIMARY_COLOR,
} from '../constants/Colors';
import HeaderContainer from '../components/HeaderContainer';
import FaceHeader from '../components/FaceHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyles}>
        <HeaderContainer />
        <FaceHeader />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.titleStyle}> WELCOME to </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={[styles.titleStyle, {paddingRight: 5}]}>D</Text>
          <Ionicons
            style={{
              color: '#ADD8E6',
              fontSize: 40,
            }}
            name="infinite-sharp"
          />
          <Text style={styles.titleStyle}> T</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <MaterialIcons
          style={{
            color: '#ADD8E6',
            fontSize: 25,
            top: 6,
          }}
          name="add-circle"
        />
        <Text style={[styles.textStyle, {color: LIGHT_COLOR}]}>
          My Profiles
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingText}>My Favourites</Text>

        <View style={styles.flexBox}>
          <View>
            <View style={styles.items}>
              <MaterialCommunityIcons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 70,
                }}
                name="airplane"
              />
            </View>
            <Text style={styles.textStyle}>Vehicle</Text>
          </View>
          <View>
            <View style={styles.items}>
              <MaterialCommunityIcons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 60,
                }}
                name="bank"
              />
            </View>
            <Text style={styles.textStyle}>Vehicle</Text>
          </View>
          <View>
            <View style={styles.items}>
              <Ionicons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 60,
                }}
                name="book-sharp"
              />
            </View>
            <Text style={styles.textStyle}>Vehicle</Text>
          </View>
        </View>
        <View style={styles.flexBox}>
          <View>
            <View style={styles.items}>
              <Ionicons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 50,
                }}
                name="person-sharp"
              />
            </View>
            <Text style={styles.textStyle}>Employer</Text>
          </View>
          <View>
            <View style={styles.items}>
              <MaterialCommunityIcons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 70,
                }}
                name="bus-side"
              />
            </View>
            <Text style={styles.textStyle}>Travel</Text>
          </View>

          <View>
            <View style={styles.items}>
              <Ionicons
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 60,
                }}
                name="car-sport-sharp"
              />
            </View>
            <Text style={styles.textStyle}>Vehicle</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  headerStyles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: '700',
    color: LIGHT_COLOR,
    alignSelf: 'center',
  },
  headingContainer: {
    marginVertical: 30,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headingText: {
    fontSize: 20,
    color: DARK_COLOR,
    fontWeight: '700',
    margin: 20,
  },
  flexBox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 20,
  },
  items: {
    width: 80,
    height: 80,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_PRIMARY_COLOR,
  },
  textStyle: {
    color: DARK_COLOR,
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 5,
    fontWeight: '500',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: LIGHT_PRIMARY_COLOR,
    width: 150,
    height: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
});
