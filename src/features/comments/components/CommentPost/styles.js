import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 27,
    paddingHorizontal: 16,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  postDescription: {
    flexDirection: 'row',
  },
  commentPost: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  textDescription: {
    color: '#000000',
    fontSize: 13,
    lineHeight: 15,
  },
  textTitle: {
    fontWeight: 'bold',
  },
});

export default styles;
