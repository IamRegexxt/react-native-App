import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';



// Define each card as a separate component for better reusability
const MyComponent = ({ title, content, imageSource }) => (



    <Card style={styles.card}>
    <Card.Cover source={imageSource} />
    <Card.Content>
      <Text variant="titleLarge" style={styles.title}>{title}</Text>
      <Text variant="bodyMedium" style={styles.content}>{content}</Text>
    </Card.Content>
  </Card>
);
const EducationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MyComponent 
        title="Elementary Diploma"
        content="Graduated Year 2011."
        imageSource={require('../../assets/elem.jpg')} 
      />
      <MyComponent 
        title="USI PILI Campus High School Diploma"
        content="Graduated Year 2015 ."
        imageSource={require('../../assets/highschool.jpg')} 
      />
      <MyComponent 
        title="Naga College Foundation"
        content="On going Bachelor's Degree."
        imageSource={require('../../assets/college.jpg')} 
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold', // Ensure this font is loaded
  },
  content: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Ensure this font is loaded
  },
});


export default EducationScreen;
