import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {setDocument} from '../redux/documentSlice';
import {
  LIGHT_COLOR,
  LIGHT_PRIMARY_COLOR,
  PRIMARY_COLOR,
} from '../constants/Colors';

const Document = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.document.data);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users`);
      dispatch(setDocument(response));
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Item = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.tinyLogo} source={{uri: item.avatar}} />
        <View style={{paddingLeft: 10}}>
          <Text style={styles.textStyle}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.emailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data?.data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 80,
    width: '90%',
    backgroundColor: PRIMARY_COLOR,
    marginVertical: 10,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: LIGHT_COLOR,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  emailStyle: {
    fontSize: 16,
    color: LIGHT_PRIMARY_COLOR,
  },
});
