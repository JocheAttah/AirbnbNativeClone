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
import Home from './src/screens/Home';

const App = () => {
  const post1 = feed[0];
  return (
    <>
      <SafeAreaView>
        {/* <Home /> */}
        <Post post={post1} />
      </SafeAreaView>
    </>
  );
};

export default App;
