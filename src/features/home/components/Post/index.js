import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import HeartIcon from '../../assets/icons/heart.svg';
import HeartRedIcon from '../../assets/icons/heartRed.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import BookMarkIcon from '../../assets/icons/bookmark.svg';
import BookMarkBlackIcon from '../../assets/icons/bookmarkBlack.svg';
import formatTimePost from '../../utils/formatTimePost';

const Post = ({
  data,
  isLiked,
  isSaved,
  onLikePost,
  onSavePost,
  onNavigateToComments,
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.content}>
        <Image source={{uri: data.owner.picture}} style={styles.avatar} />

        <TouchableOpacity style={styles.buttonName} onPress={() => {}}>
          <Text style={styles.name}>{data.owner.firstName}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.timePost}>{formatTimePost(data.publishDate)}</Text>
      </View>
    </View>
    <View>
      <Image source={{uri: data.image}} style={styles.post} />
    </View>
    <View style={styles.icons}>
      <View style={styles.contentIcons}>
        <TouchableOpacity onPress={onLikePost}>
          {!isLiked.includes(data.id) ? (
            <HeartIcon style={styles.iconLike} />
          ) : (
            <HeartRedIcon style={styles.iconLike} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNavigateToComments}
          style={styles.commentButton}>
          <CommentIcon style={styles.iconComment} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onSavePost}>
          {!isSaved ? (
            <BookMarkIcon style={styles.iconSaved} />
          ) : (
            <BookMarkBlackIcon style={styles.savedimage} />
          )}
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text style={styles.likes}>{data.likes} Likes</Text>
    </View>
    <View style={styles.commentPost}>
      <Text style={styles.userName}>{data.owner.firstName}</Text>
      <Text style={styles.userComment}>{data.text}</Text>
    </View>
  </View>
);

export default Post;
