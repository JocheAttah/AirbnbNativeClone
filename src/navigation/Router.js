import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guest';
import SearchResultsScreen from '../screens/SearchResults';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen
          name="Guest"
          component={GuestScreen}
          options={{title: "Who's coming?"}}
        />
        {/* <Stack.Screen
          name="Search Results"
          component={SearchResultsScreen}
          options={{title: 'Search', headerShown: false}}
          // options={{title: '`Like any?`'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
