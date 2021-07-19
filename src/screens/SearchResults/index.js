import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, FlatList, Text} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const renderItem = ({item}) => (
  <Post post={item} keyExtractor={item => item.id} />
);

const SearchResultsScreen = () => {
  return (
    <View style={{flex: 1, marginTop: 50,}}>
      <View>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
      </View>
      <BottomSheet initialSnapIndex={0} snapPoints={['3%', '50%', '100%']}>
        <FlatList data={feed} renderItem={renderItem} />
      </BottomSheet>
    </View>
  );
};

export default SearchResultsScreen;
