import React from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {View, FlatList, Text} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const renderItem = ({item}) => (
  <Post post={item} keyExtractor={item => item.id} />
);

const SearchResultsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        {/* <FlatList
          data={feed}
          renderItem={({item}) => (
            <Post post={item} keyExtractor={item => item.id} />
          )}
        /> */}
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
        <Text>fhfjfkflflfl</Text>
      </View>
      <BottomSheet initialSnapIndex={0} snapPoints={['3%','50%', '100%']}>
        {/* <BottomSheetScrollView> */}
        <FlatList data={feed} renderItem={renderItem} />
        {/* </BottomSheetScrollView> */}
      </BottomSheet>
    </View>
  );
};

export default SearchResultsScreen;
