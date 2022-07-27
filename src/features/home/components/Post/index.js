import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {formatDistance} from 'date-fns';
import {enUS} from 'date-fns/locale';
import styles from './styles';

import HeartIcon from '../../assets/icons/heart.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import BookMarkSaved from '../../assets/icons/bookmark.svg';

const Post = ({data}) => {
  const formatTimePost = () => {
    // console.log(data.publishDate);
    const datePost = new Date(data.publishDate);
    return formatDistance(new Date(), datePost, {
      locale: enUS,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Image source={{uri: data.owner.picture}} style={styles.avatar} />
          <TouchableOpacity style={styles.buttonName} onPress={() => {}}>
            <Text style={styles.name}>{data.owner.firstName}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.timePost}>{formatTimePost()}</Text>
        </View>
      </View>
      <View>
        <Image source={{uri: data.image}} style={styles.post} />
      </View>
      <View style={styles.icons}>
        <View style={styles.contentIcons}>
          <TouchableOpacity onPress={() => {}}>
            <HeartIcon style={styles.like} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.commentButton}>
            <CommentIcon style={styles.comment} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <BookMarkSaved style={styles.saved} />
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
};

export default Post;
