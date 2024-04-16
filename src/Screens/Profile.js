// AddProfileForm.js

import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {addProfile} from './../redux/profileSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import {DARK_COLOR} from '../constants/Colors';
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const Profile = ({navigation, route}) => {
  const data = route?.params?.profileData;
  const isProfile = route?.params?.isProfile;

  console.log(data, isProfile);
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);
  const handleSubmit = values => {
    dispatch(addProfile(values));
    navigation.goBack();
    ToastAndroid.show('Profile Added successfully', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}>
        <Entypo
          style={{
            color: DARK_COLOR,
            fontSize: 100,
          }}
          name="user"
        />
      </View>
      <Formik
        initialValues={{
          name: isProfile ? data[0]?.name : '',
          email: isProfile ? data[0]?.email : '',
          mobile: isProfile ? data[0]?.mobile : '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <Text style={styles.textStyle}>Enter Your Name</Text>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange('name')}
              value={values.name}
              style={styles.input}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <Text style={styles.textStyle}>Enter Email</Text>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Text style={styles.textStyle}>Enter Mobile Number</Text>
            <TextInput
              placeholder="Mobile"
              onChangeText={handleChange('mobile')}
              value={values.mobile}
              style={styles.input}
            />
            {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

            <Button title="Add Profile" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  textStyle: {
    fontWeight: '700',
    color: 'black',
  },
  imageStyle: {
    marginVertical: 70,
    borderWidth: 5,
    borderRadius: 100,
    padding: 20,
  },
});

export default Profile;
