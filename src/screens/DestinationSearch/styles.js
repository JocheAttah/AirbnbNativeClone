import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  textInputContainer: {
    height: '100%',
  },
  icon: {
    paddingRight: 10,
  },
  textInput: {
    fontSize: 20,
    color: '#333',
  },
  listContainer: {
    marginTop: 35,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ececec',
  },
  iconContainer: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    marginRight: 16,
    padding: 8,
  },
  description: {
    fontSize: 18,
  },
});

export default styles;
