import React from 'react';
import {View, Text} from 'react-native';
import CommentPost from '../../../components/CommentPost';
import styles from './styles';

const CommentsContainer = ({post}) => (
  <View style={styles.container}>
    <CommentPost post={post} />
    <Text>COMENTÁRIOS CONTAINER</Text>
  </View>
);

export default CommentsContainer;
