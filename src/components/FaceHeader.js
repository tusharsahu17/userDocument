import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {DARK_COLOR} from '../constants/Colors';

const FaceHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyles}>Face Compare</Text>
      </View>
      <View style={styles.imageStyle}>
        <Entypo
          style={{
            color: DARK_COLOR,
            fontSize: 25,
          }}
          name="users"
        />
      </View>
    </View>
  );
};

export default FaceHeader;

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
