import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded);
      }
    };
    getUserData();
  }, []); // Correctly placed dependency array to run effect once

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };
  const fetchProtectedData = async () => {

    const token = await AsyncStorage.getItem('token');
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`,{
        headers: { Authorization: `Bearer  ${token}`}
        });

    } catch (err) {
        Alert.alert('Error, failed to fetch protected data');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to HomeScreen</Text>
      {user && <Text>Email: {user.email}</Text>}
      <Button title='Fetch protected data' onPress={fetchProtectedData} />
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default Home;
