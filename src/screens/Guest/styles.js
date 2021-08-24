import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  linearGradient: {
    height: 0.40 * height,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  titleSection: {},
  title: {
    fontSize: 30,
    color: '#fff',
    padding: 20,
    paddingBottom: 40,
    fontWeight: '600',
  },
  guestSection: {
    backgroundColor: '#fff',
    marginTop: -20,
    width: '100%',
    borderRadius: 28,
    padding: 20,
  },
  headerSection: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  headerParagraph: {
    fontSize: 14,
    fontWeight: '300',
  },
  rowsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  ageSection: {
    paddingVertical: 20,
  },
  ageClass: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '300',
  },

  counterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  counter: {
    fontSize: 20,
    fontWeight: '300',
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'lightgrey',
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterAction: {
    fontSize: 30,
    color: '#585f6a',
  },
  actionSection: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingVertical: 20,
  },
  skipButton: {
    borderBottomWidth: 3,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 3,
    borderColor: 'black',
  },
  skipText: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f15454',
    borderRadius: 10,
  },
  searchText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
