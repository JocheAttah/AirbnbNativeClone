/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : '#fff',
          padding: 7,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 20,
        }}>
        <Text
          style={{color: isSelected ? 'white' : 'black', fontWeight: '600'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
