/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
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

  const flatListRef = useRef();

  useEffect(() => {
    if (!selectedPlaceId || !flatListRef) return;
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatListRef.current.scrollToIndex({index: index});
  }, [selectedPlaceId]);

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
          ref={flatListRef}
          data={places}
          renderItem={({item}) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
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
