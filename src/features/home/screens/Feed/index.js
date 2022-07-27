import React, {useState, useEffect, useCallback} from 'react';
import FeedContainer from './ui';
import postService from '../../../../core/services/posts';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const response = await postService.list();
    // console.log(response);
    setPosts(response.data);
  }, [setPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return <FeedContainer posts={posts} />;
};
export default Feed;
