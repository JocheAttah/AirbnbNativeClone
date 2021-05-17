import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Room1} from '../../../assets';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* image/ images component */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      {/* rating */}
      <View style={styles.rateDetailContainer}>
        <View style={styles.ratingContainer}>
          <Fontisto name={'star'} color={'#f15454'} size={16} />
          <Text style={styles.rating}>5.00</Text>
          <Text style={styles.reviewNo}>(5)</Text>
        </View>
        {/* Details ...bed anb Bedrooms */}
        <Text style={styles.details} numberOfLines={1}>1 Bed 1 Bedroom</Text>
      </View>
      {/* type && description */}
      <Text style={styles.description} numberOfLines={2}>
        Private room. Abuja Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At maiores eum perferendis. Autem quis consectetur{' '}
      </Text>

      {/* old and New price */}
      <Text style={styles.priceContainer}>
        <Text style={styles.oldPrice}>$19</Text>
        <Text style={styles.newPrice}> $17</Text>/ night
      </Text>

      {/* total */}
      <Text style={styles.total}>$51 total</Text>
    </View>
  );
};

export default Post;
