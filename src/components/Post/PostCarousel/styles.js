import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 20,
    marginBottom: 170,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rateDetailContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: '60%',
  },
  ratingContainer: {
    width: '22%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 25,
    marginBottom: 10,
  },
  rating: {
    fontSize: 12,
    color: '#717171',
  },
  reviewNo: {
    fontSize: 12,
    color: '#717171',
  },
  descriptionContainer: {
    width: '90%',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
  },
  priceContainer: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '300',
  },
  oldPrice: {
    fontWeight: '700',
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: '700',
  },
});

export default styles;
