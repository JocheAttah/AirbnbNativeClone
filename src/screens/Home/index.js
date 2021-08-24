import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {
  Abuja,
  Badagry,
  EntireHomes,
  Experiences,
  Featured,
  HomeImage,
  Ibadan,
  Ikeja,
  Lagos,
  LearnMore,
  Online,
  Outdoors,
  Pets,
  Ph,
  Unique,
} from '../../../assets';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Places from '../../components/Places';
import Location from '../../components/Location';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.warn('Get Inspired Pressed');
  };
  const handleSearch = () => {
    navigation.navigate('Destination Search');
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('screen').width - 130}
            snapToAlignment={'center'}
            decelerationRate={'fast'}>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('screen').width - 130}
            snapToAlignment={'center'}
            decelerationRate={'fast'}>
            <Location image={Outdoors} name="Outdoor getaways" />
            <Location image={Unique} name="Unique stays" />
            <Location image={EntireHomes} name="Entire homes" />
            <Location image={Pets} name="Pets allowed" />
          </ScrollView>

          <View>
            <View style={styles.learnMoreSection}>
              <View style={styles.learnMoreContent}>
                <Text style={styles.header}>Become a Host</Text>
                <Text style={styles.learnMoreParagraph}>
                  Earn Extra income and unlock new {'\n'}
                  opportunities by sharing {'\n'}
                  your space
                </Text>
                <Pressable style={styles.learnMoreButton} onPress={handlePress}>
                  <Text style={styles.learnMoreButtonText}>Learn more</Text>
                </Pressable>
              </View>
            </View>
            <Image source={LearnMore} style={styles.imageLearnMore} />
          </View>

          <Text style={styles.textHeader}>Discover Experiences</Text>
          <Text style={styles.paragraph}>
            Unique activities with local experts—in person or online.
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('screen').width - 130}
            snapToAlignment={'center'}
            decelerationRate={'fast'}>
            <Location
              image={Featured}
              name="Featured collection: Wanderlust"
              paragraph="Travel from home with Online Experiences."
            />
            <Location
              image={Online}
              name="Online Experiences"
              paragraph="Live, interactive activities led by Hosts."
            />
            <Location
              image={Experiences}
              name="Experiences"
              paragraph="Local things to do, wherever you are."
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
