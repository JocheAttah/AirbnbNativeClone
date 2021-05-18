import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  //   content: {
  //     width: '94%',
  //   },
  linearGradient: {
    height: '55%',
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
    borderRadius: 25,
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
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterAction: {
    fontSize: 30,
    color: '#585f6a',
  },
});

export default styles;
