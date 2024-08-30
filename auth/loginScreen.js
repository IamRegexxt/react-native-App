import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { token } = response.data;
      const response = await axios.post(`http://localhost:3000/login/`, {username, password });
      const decoded = jwtDecode(token);
      console.log(decoded); // token payload
      await AsyncStorage.setItem('token', token);
      navigation.navigate('HomeScreen'); // Ensure HomeScreen is correctly referenced
    } catch (error) {
      Alert.alert('Failed to login', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
