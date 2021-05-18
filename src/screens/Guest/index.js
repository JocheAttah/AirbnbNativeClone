import React from 'react';
import styles from './styles';
import {View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GuestScreen = () => {
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
          <Text style={styles.headerParagraph}>May19-21</Text>
        </View>
        <View>
          {/* Indivigual component */}
          <View style={styles.row}>
            <View style={styles.ageSection}>
              <Text style={styles.ageClass}>Adults</Text>
              <Text style={styles.paragraph}>Ages 13 or above</Text>
            </View>
            <View style={styles.counterSection}>
              <Pressable
                onPress={() => {
                  console.warn('- was pressed');
                }}
                style={styles.button}>
                <Text style={styles.counterAction}> - </Text>
              </Pressable>
              <Text style={styles.counter}>0</Text>
              <Pressable
                onPress={() => {
                  console.warn('+ was pressed');
                }}
                style={styles.button}>
                <Text style={styles.counterAction}> + </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default GuestScreen;
