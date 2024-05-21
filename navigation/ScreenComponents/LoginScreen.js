import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text  } from 'react-native';
import { TextInput, Button, ActivityIndicator, Avatar } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Basic input validation
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        username,
        password,
      });

      const token = response.data.token;

      await AsyncStorage.setItem('token', token);
      setIsLoading(false);
      navigation.navigate('MainDrawer');
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data) {
        Alert.alert('Error', error.response.data.message || 'Login failed');
        console.log(error.response.data);
      } else {
        Alert.alert('Error', 'An error occurred during login');
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Avatar.Icon 
        size={80} 
        icon="account" 
        style={styles.avatar} 
      />
      <TextInput
        label="Username"
        mode="flat"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TextInput
        label="Password"
        mode="flat"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        loading={isLoading}
        disabled={isLoading}
        style={styles.button}
      >
        Login
      </Button>
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating={true} size="large" color="#0000ff" />
        </View>
      )}
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
  textInput: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 24,
    backgroundColor: '#40B1AB', // Adjust the background color as needed
  },
});

export default LoginScreen;