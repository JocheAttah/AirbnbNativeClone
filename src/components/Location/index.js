import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

const Location = ({name, image}) => {
  return (
    <View style={styles.locationContainer}>
      <Image source={image} style={styles.locationImage} />
      <Text style={styles.locationTitle}>{name}</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  locationContainer: {
    width: Dimensions.get('screen').width - 150,
    // backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  locationImage: {
    // width: '100%',
    width: Dimensions.get('screen').width - 150,
    height: Dimensions.get('screen').width - 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  locationTitle: {
    marginTop: 10,
    fontWeight: '400',
  },
});
