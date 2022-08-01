import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import Post from '../../../components/Post';

const FeedContainer = ({
  posts,
  likedPosts,
  savedPosts,
  onLikePost,
  onSavePost,
  onNavigateToComments,
}) => (
  <View style={styles.container}>
    <Header />
    {Boolean(posts.length) && (
      <FlatList
        style={styles.listPost}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Post
            data={item}
            isLiked={likedPosts.includes(item.id)}
            isSaved={savedPosts.includes(item.id)}
            onLikePost={() => onLikePost(item.id)}
            onSavePost={() => onSavePost(item.id)}
            onNavigateToComments={onNavigateToComments}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    )}
  </View>
);

export default FeedContainer;
