import React, {useState} from 'react';
import styles from './styles';
import {View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const navigation = useNavigation();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      {/* <View style={styles.content}> */}
      <LinearGradient
        // colors={['#97bcff', '#0652de']}
        colors={['#216bf1', '#2364dd', '#0049cf']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}
        // end={{x: 1, y: 1}}
        // locations={[0, 0.95]}
      >
        <View style={styles.titleSection}>
          <Text style={styles.title}>Who's Coming?</Text>
        </View>
      </LinearGradient>
      <View style={styles.guestSection}>
        {/* header */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>Nearby</Text>
          <Text style={styles.headerParagraph}>May 19-21</Text>
        </View>
        <View>
          <View style={styles.rowsContainer}>
            {/* Adult component */}
            <View style={styles.row}>
              <View style={styles.ageSection}>
                <Text style={styles.ageClass}>Adults</Text>
                <Text style={styles.paragraph}>Ages 13 or above</Text>
              </View>
              <View style={styles.counterSection}>
                <Pressable
                  onPress={() => setAdults(adults - 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> - </Text>
                </Pressable>
                <Text style={styles.counter}>{adults}</Text>
                <Pressable
                  onPress={() => setAdults(adults + 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> + </Text>
                </Pressable>
              </View>
            </View>
            {/* Children component */}
            <View style={styles.row}>
              <View style={styles.ageSection}>
                <Text style={styles.ageClass}>Children</Text>
                <Text style={styles.paragraph}>Ages 2 to 12</Text>
              </View>
              <View style={styles.counterSection}>
                <Pressable
                  onPress={() => setChildren(children - 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> - </Text>
                </Pressable>
                <Text style={styles.counter}>{children}</Text>
                <Pressable
                  onPress={() => setChildren(children + 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> + </Text>
                </Pressable>
              </View>
            </View>
            {/* Infant component */}
            <View style={styles.row}>
              <View style={styles.ageSection}>
                <Text style={styles.ageClass}>Infants</Text>
                <Text style={styles.paragraph}>Under 2</Text>
              </View>
              <View style={styles.counterSection}>
                <Pressable
                  onPress={() => setInfants(infants - 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> - </Text>
                </Pressable>
                <Text style={styles.counter}>{infants}</Text>
                <Pressable
                  onPress={() => setInfants(infants + 1)}
                  style={styles.button}>
                  <Text style={styles.counterAction}> + </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.actionSection}>
        <Pressable
          style={styles.skipButton}
          onPress={() => console.warn('Skip button was pressed')}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
        <Pressable
          style={styles.searchButton}
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'Search Results',
              },
            })
          }>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>
    </View>
    // </View>
  );
};

export default GuestScreen;
