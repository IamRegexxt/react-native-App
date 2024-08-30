import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { useFonts } from 'expo-font';

const AboutScreen = () => {
  // Call useFonts inside the functional component
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  // Show a loading indicator while fonts are loading
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>About Me</Text>
          <Text style={styles.headerSubtitle}>My Introduction</Text>
        </View>
        <View style={styles.content}>
          <Image source={require('../../assets/portfolio.jpg')} style={styles.avatar} />
          <Card style={styles.card}>
            <Card.Content>
              <Paragraph style={styles.paragraph}>
                🚀I am Jesreel Amorganda, a 3rd Year Student of Naga College Foundation taking the course of Bachelor Science of Computer Science. Enthusiastic student with a strong dedication to academic excellence and personal growth. Eager to explore the intersections of knowledge and creativity, I am passionate about building new things that are connected to technology. Through my studies and extracurricular experiences, I aim to contribute my unique perspective and skills to make a positive impact on the world. ✨
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    letterSpacing: 1,
    fontFamily: 'Poppins-Bold', // Use the loaded font
    fontWeight: '600',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins-Regular', // Use the loaded font
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 125, // Rounded corners for the avatar
  },
  card: {
    maxWidth: 700,
    width: '90%',
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Poppins-Regular', // Use the loaded font
    color: 'gray',
  },
});

export default AboutScreen;
