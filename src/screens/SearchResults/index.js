/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, FlatList, Text} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import SearchResultsMap from '../SearchResultsMap';

const renderItem = ({item}) => (
  <Post post={item} keyExtractor={item => item.id} />
);

const SearchResultsScreen = () => {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <View>
        <SearchResultsMap />
      </View>
      <BottomSheet snapPoints={['7%', '50%', '100%']}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 5,
            paddingBottom: 10,
          }}>
          {feed.length} Monthly stays
        </Text>
        <FlatList data={feed} renderItem={renderItem} />
      </BottomSheet>
    </View>
  );
};

export default SearchResultsScreen;
