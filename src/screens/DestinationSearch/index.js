/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const [destination, setDestination] = useState('');
  const navigation = useNavigation();

  console.log(searchResults);

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          styles={{textInput: styles.textInput}}
          placeholder="Where are you  going"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guest');
          }}
          query={{
            key: 'AIzaSyD3eYC2Fmvfr4rVSP2X4w6E87aW8q4HuUU',
            language: 'en',
            types: '{cities}',
          }}
          suppressDefaultStyles
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationSearchScreen;
