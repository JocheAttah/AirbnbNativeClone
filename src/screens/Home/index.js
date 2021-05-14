import React from 'react';
import styles from './styles';
import {View, Text, ImageBackground, Pressable, ScrollView} from 'react-native';
import {
  Abuja,
  Badagry,
  EntireHomes,
  HomeImage,
  Ibadan,
  Ikeja,
  Lagos,
  Outdoors,
  Pets,
  Ph,
  Unique,
} from '../../../assets';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Places from '../../components/Places';
import Location from '../../components/Location';

const Home = () => {
  const handlePress = () => {
    console.warn('Get Inspired Pressed');
  };
  const handleSearch = () => {
    console.warn('User Searching');
  };

  return (
    <ScrollView>
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
      <View style={styles.content}>
        <Text style={styles.textHeader}>Explore Nearby</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.fix}>
              <Places image={Lagos} name="Lagos" distance="11 hour drive" />
              <Places image={Ph} name="Port-Harcourt" distance="8 hour drive" />
            </View>
            <View style={styles.fix}>
              <Places image={Ibadan} name="Ibadan" distance="9 hour drive" />
              <Places image={Ikeja} name="Ikeja" distance="30 minutes drive" />
            </View>
            <View style={styles.fix}>
              <Places image={Abuja} name="Abuja" distance="15 minutes drive" />
              <Places image={Badagry} name="Badagry" distance="13 hour drive" />
            </View>
          </ScrollView>

          <Text style={styles.textHeader}>Live anywhere</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Location image={Outdoors} name="Outdoor getaways" />
            <Location image={Unique} name="Unique stays" />
            <Location image={EntireHomes} name="Entire homes" />
            <Location image={Pets} name="Pets allowed" />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
