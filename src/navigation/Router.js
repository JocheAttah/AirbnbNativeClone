import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guest';

import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsMap from '../screens/SearchResultsMap';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
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
          options={{title: "Who's coming?", headerShown: false}}
        />

        <Stack.Screen
          name="map"
          component={SearchResultsMap}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
