import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import Post from '../../../components/Post';

const FeedContainer = ({posts}) => (
  <View style={styles.container}>
    <Header />
    <FlatList
      style={styles.listPost}
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Post data={item} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default FeedContainer;
