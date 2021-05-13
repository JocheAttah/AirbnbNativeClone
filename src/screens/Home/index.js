import React from 'react';
import styles from './styles';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {HomeImage} from '../../../assets';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = () => {
  const handlePress = () => {
    console.warn('Get Inspired Pressed');
  };
  const handleSearch = () => {
    console.warn('User Searching');
  };

  return (
    <View>
      {/* The search bar */}
      <Pressable style={styles.searchButton} onPress={handleSearch}>
        <Fontisto name={'search'} size={20} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

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
