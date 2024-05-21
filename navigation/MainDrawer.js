import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './ScreenComponents/HomeScreen';
import AboutScreen from './ScreenComponents/AboutScreen';
import SkillsScreen from './ScreenComponents/SkillScreen';
import EducationScreen from './ScreenComponents/EducationScreen';
import ContactScreen from './ScreenComponents/ContactScreen';
import { Icon } from 'react-native-paper';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Main Drawer Navigator
const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ drawerLabel: 'Home',
        drawerIcon: ({color, size})=>{
          <Icon name="home" color={color} size={size}/>
        }
        }}
        
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ 
          drawerLabel: 'About',
          drawerIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Education" 
        component={EducationScreen} 
        options={{ 
          drawerLabel: 'Education',
          drawerIcon: ({ color, size }) => (
            <Icon name="school" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Skills" 
        component={SkillsScreen} 
        options={{ 
          drawerLabel: 'Skills',
          drawerIcon: ({ color, size }) => (
            <Icon name="build" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={{ 
          drawerLabel: 'Contact',
          drawerIcon: ({ color, size }) => (
            <Icon name="contact-mail" color={color} size={size} />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
};

{/* <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerTitle: "Personal Website",
    headerRight: () => (<Button title="Logout" onPress={handleLogout} />), // Add a logout button
  }}
/> */}

export default MainDrawer; 
