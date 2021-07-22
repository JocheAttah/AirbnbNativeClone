import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SearchResultsMap = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}></Marker>
      </MapView>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({});