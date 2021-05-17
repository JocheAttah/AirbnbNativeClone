/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Post from './src/components/Post';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <SafeAreaView>
        {/* <Home /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
