/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import {Dimensions} from 'react-native';
// import Post from '../../components/Post/PostCarousel';
import PostCarousel from '../../components/Post/PostCarousel';

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MapView
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
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
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={[{position: 'absolute', bottom: 40}, {marginLeft: 10}]}>
        <FlatList
          data={places}
          renderItem={({item}) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator
          snapToInterval={width - 50}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
        {/* <PostCarousel post={places[0]} /> */}
      </View>
    </View>
  );
};

export default SearchResultsMap;
