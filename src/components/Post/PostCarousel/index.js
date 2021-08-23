import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const PostCarousel = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  console.log(post);
  return (
    <View style={[styles.container, {width: width - 60}]}>
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
          <Fontisto name={'star'} color={'#f15454'} size={8} />
          <Text style={styles.rating}> {post.rating}</Text>
          <Text style={styles.reviewNo}> ({post.reviewNo})</Text>
        </View>
        {/* type && description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={2}>
            {post.type} . {post.title}
          </Text>
        </View>

        {/* old and New price */}
        <Text style={styles.priceContainer}>
          <Text style={styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={styles.newPrice}> ${post.newPrice}</Text>/ night
        </Text>
      </View>
    </View>
  );
};

export default PostCarousel;
