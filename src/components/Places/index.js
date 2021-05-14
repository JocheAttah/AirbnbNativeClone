import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

const Places = ({name, image, distance}) => {
  return (
    <View style={styles.placeContainer}>
      <Image source={image} style={styles.tinyImage} />
      <View style={styles.fix}>
        <Text style={styles.location}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  placeContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 150,
    marginTop: 10,
    borderRadius: 10,
  },
  tinyImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
  },
  distance: {
    fontSize: 14,
    fontWeight: '300',
  },
  fix: {justifyContent: 'center', marginLeft: 10},
});
