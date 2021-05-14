import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

const Location = ({name, image, paragraph}) => {
  return (
    <View style={styles.locationContainer}>
      <Image source={image} style={styles.locationImage} />
      <Text style={styles.locationTitle}>{name}</Text>
      {paragraph ? <Text style={styles.paragraph}>{paragraph}</Text> : <Text />}
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
    fontSize: 14,
    marginTop: 10,
    fontWeight: '500',
  },
  paragraph: {
    fontSize: 14,
    color: '#222222',
    lineHeight: 20,
    fontWeight: '300',
    marginBottom: 20,
  },
});
