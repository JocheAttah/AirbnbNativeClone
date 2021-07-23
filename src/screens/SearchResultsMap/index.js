/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';

const SearchResultsMap = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        // style={{width: '100%', height: '100%'}}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({});
