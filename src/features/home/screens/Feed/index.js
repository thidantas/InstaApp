import React, {useState, useEffect, useCallback} from 'react';
import FeedContainer from './ui';
import postService from '../../../../core/services/posts';
import routes from '../../../../core/constants/routes';

const Feed = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const response = await postService.list();
    // console.log(response);
    setPosts(response.data);
  }, [setPosts]);

  const handleOnLikePost = useCallback(postId => {
    // Verificar se esse post já tem o seu like
    // Atualizar a quantidade de likes na api
    // Atualizar a lista de likedPosts
  }, []);

  const handleOnSavePost = useCallback(postId => {
    // Verificar se esse post já está salvo
    // Atualizar a lista de posts salvos
  }, []);

  const handleOnNavigateToComments = useCallback(() => {
    navigation.navigate(routes.Comments.itself);
  }, [navigation]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <FeedContainer
      posts={posts}
      savedPosts={savedPosts}
      likedPosts={likedPosts}
      onLikePost={handleOnLikePost}
      onSavePost={handleOnSavePost}
      onNavigateToComments={handleOnNavigateToComments}
    />
  );
};

export default Feed;
