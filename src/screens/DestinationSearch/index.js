import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [destination, setDestination] = useState('');
  const navigation = useNavigation();

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
          <Pressable
            onPress={() => navigation.navigate('Guest')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo
                name={'location-pin'}
                size={25}
                color={'#333'}
                style={styles.locationIcon}
              />
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
