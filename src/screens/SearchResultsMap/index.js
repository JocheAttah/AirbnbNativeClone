/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import {Dimensions} from 'react-native';
import Post from '../../components/Post/PostCarousel';
import PostCarousel from '../../components/Post/PostCarousel';
const {width, height} = Dimensions.get('window');

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View
      style={{
        width: width,
        height: height,
      }}>
      <MapView
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: width,
          height: height,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: places[0].coordinate.latitude,
          longitude: places[0].coordinate.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
        <View>
          <PostCarousel post={places[0]} />
        </View>
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
