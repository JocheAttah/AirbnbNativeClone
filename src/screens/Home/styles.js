import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    marginLeft: 25,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: '#222222',
    letterSpacing: 0.32,
    lineHeight: 50,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#222222',
    lineHeight: 20,
    fontWeight: '400',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#222222',
    width: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
  },
  searchButtonText: {
    color: '#222222',
    fontWeight: '400',
    paddingHorizontal: 5,
    paddingVertical: 12,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 15,
  },

  fix: {flexDirection: 'column', marginRight: 10},
});

export default styles;
