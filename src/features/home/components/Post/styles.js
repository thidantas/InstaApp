import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  header: {
    height: 49,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  buttonName: {
    marginLeft: 10,
  },
  name: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timePost: {
    color: '#999999',
    fontSize: 12,
  },
  post: {
    width: '100%',
    height: 376,
  },
  icons: {
    height: 40,
    paddingTop: 12,
    paddingBottom: 9.74,
    paddingLeft: 13,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    width: 21,
    height: 18.26,
  },
  commentButton: {
    marginLeft: 19,
  },
  comment: {
    width: 18.3,
    height: 18.26,
  },
  saved: {
    width: 18,
    height: 26,
  },
  likes: {
    marginLeft: 12,
    fontSize: 13,
    color: '#000000',
    fontWeight: 'bold',
  },
  commentPost: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 17,
    paddingBottom: 11,
    lineHeight: 15,
  },
  userName: {
    fontSize: 13,
    color: '#000000',
    fontWeight: 'bold',
  },
  userComment: {
    marginLeft: 4,
    fontSize: 13,
    color: '#000000',
  },
});

export default styles;
