/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import feed from './assets/data/feed';
import Post from './src/components/Post';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guest';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';

const App = () => {
  const post1 = feed[0];
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
