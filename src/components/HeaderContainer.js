import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {DARK_COLOR} from '../constants/Colors';

const HeaderContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}>
        <Entypo
          style={{
            color: DARK_COLOR,
            fontSize: 25,
          }}
          name="user"
        />
      </View>
      <View>
        <Text style={styles.textStyles}>Frontend User</Text>
        <Text style={styles.textStyles}>383233</Text>
      </View>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textStyles: {
    marginHorizontal: 10,
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    margin: 20,
  },
});
