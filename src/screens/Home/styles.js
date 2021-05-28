import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    marginLeft: 25,
    // marginTop: -30,
  },
  image: {
    width: '100%',
    // width: Dimensions.get('screen').width,
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 44,
    fontWeight: '700',
    color: '#222222',
    letterSpacing: 0.32,
    lineHeight: 45,
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
    top: 50,
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
  learnMoreSection: {
    // width: Dimensions.get('screen').width - 50,
    // flexDirection: 'row',
    width: '94%',
    marginTop: 20,
  },
  learnMoreContent: {
    backgroundColor: '#221C1A',
    padding: 30,
    paddingBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  learnMoreParagraph: {
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 12,
  },
  imageLearnMore: {
    // width: Dimensions.get('screen').width - 50,
    width: '94%',
    height: Dimensions.get('screen').width - 180,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  learnMoreButton: {
    backgroundColor: '#ffffff',
    width: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  learnMoreButtonText: {
    color: '#222222',
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default styles;
