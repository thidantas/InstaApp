import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import Post from '../../../components/Post';

const FeedContainer = ({
  posts,
  likedPosts,
  onLikePost,
  savedPosts,
  loading,
  onSavePost,
  onFetchPosts,
  onNavigateToComments,
}) => (
  <View style={styles.container}>
    <Header />
    {Boolean(posts.length) && (
      <FlatList
        style={styles.listPost}
        data={posts}
        keyExtractor={item => item.id}
        onEndReached={() => onFetchPosts()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading && (
            <View style={styles.loading}>
              <ActivityIndicator size={20} color="#E1306C" />
            </View>
          )
        }
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
