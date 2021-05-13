import React from 'react';
import styles from './styles';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {HomeImage} from '../../../assets';

const Home = () => {
  const handlePress = () => {
    console.warn('Get Inspired Pressed');
  };

  return (
    <View>
      {/* The search bar */}

      {/* imagebackground */}
      <ImageBackground source={HomeImage} style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>
            The{'\n'}Greatest{'\n'}Outdoors
          </Text>
          <Text style={styles.paragraph}>Wishlists curated by Airbnb</Text>
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Get Inspired</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
