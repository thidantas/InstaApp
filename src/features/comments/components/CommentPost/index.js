import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const CommentPost = ({post}) => (
  <View style={styles.container}>
    <View style={styles.postDescription}>
      <Image source={{uri: post.owner.picture}} style={styles.image} />
      <View style={styles.commentPost}>
        <Text style={styles.textDescription}>
          <Text style={styles.textTitle}>{post.owner.title}</Text> {post.text}
        </Text>
      </View>
    </View>
  </View>
);

export default CommentPost;
