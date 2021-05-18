import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {fontSize: 20},
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
