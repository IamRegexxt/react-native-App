import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ScreenComponents/HomeScreen';
import AboutScreen from './ScreenComponents/AboutScreen';
import SkillsScreen from './ScreenComponents/SkillScreen';
import EducationScreen from './ScreenComponents/EducationScreen';
import ContactScreen from './ScreenComponents/ContactScreen';
import { IconButton } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, Button} from "react-native"; // Ensure you import the correct IconButton component

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            Alert.alert('Error', 'An error occurred while logging out');
            console.error(error);
        }
    };

};

// Main Drawer Navigator
const MainDrawer = () => {
    return (

        <Drawer.Navigator>
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <IconButton icon="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    drawerLabel: 'About',
                    drawerIcon: ({ color, size }) => (
                        <IconButton icon="information-outline" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Education"
                component={EducationScreen}
                options={{
                    drawerLabel: 'Education',
                    drawerIcon: ({ color, size }) => (
                        <IconButton icon="school" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Skills"
                component={SkillsScreen}
                options={{
                    drawerLabel: 'Skills',
                    drawerIcon: ({ color, size }) => (
                        <IconButton icon="tools" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    drawerLabel: 'Contact',
                    drawerIcon: ({ color, size }) => (
                        <IconButton icon="email" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainDrawer;
