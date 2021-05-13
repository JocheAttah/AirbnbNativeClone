import {StyleSheet} from 'react-native';

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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default styles;
