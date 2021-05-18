import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
  const [destination, setDestination] = useState('');

  console.log(searchResults);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        {/* <Fontisto
          name={'arrow-left-l'}
          size={24}
          color={'#333'}
          style={styles.icon}
        /> */}
        <TextInput
          style={styles.textInput}
          onChangeText={setDestination}
          value={destination}
          placeholder="Where are you  going?"
        />
      </View>

      {/* list of destination */}
      <FlatList
        style={styles.listContainer}
        data={searchResults}
        renderItem={({item}) => (
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
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
