import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = props => {
  const post = props.post;
  console.log(post);
  return (
    <View style={styles.container}>
      {/* image/ images component */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      {/* rating */}
      <View style={styles.rateDetailContainer}>
        <View style={styles.ratingContainer}>
          <Fontisto name={'star'} color={'#f15454'} size={16} />
          <Text style={styles.rating}> {post.rating}</Text>
          <Text style={styles.reviewNo}> ({post.reviewNo})</Text>
        </View>
        {/* Details ...bed anb Bedrooms */}
        <Text style={styles.details} numberOfLines={1}>
          {post.bed} bed(s) {post.bedroom} bedroom(s)
        </Text>
      </View>
      {/* type && description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type} . {post.title}
      </Text>

      {/* old and New price */}
      <Text style={styles.priceContainer}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>/ night
      </Text>

      {/* total */}
      <Text style={styles.total}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
