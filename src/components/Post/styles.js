import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  rateDetailContainer: {
    flexDirection: 'row',
    width: '94%',
  },
  ratingContainer: {
    width: '22%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  rating: {
    fontSize: 16,
  },
  reviewNo: {
    fontSize: 16,
    color: '#717171',
  },
  details: {
    width: '85%',
    marginVertical: 10,
    fontSize: 16,
    color: '#717171',
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '300',
  },
  priceContainer: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '300',
    marginVertical: 10,
  },
  oldPrice: {
    fontWeight: '700',
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: '700',
  },
  total: {
    color: '#717171',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default styles;
