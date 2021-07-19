import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo
        name={'location-pin'}
        size={25}
        color={'#333'}
        style={styles.locationIcon}
      />
    </View>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
