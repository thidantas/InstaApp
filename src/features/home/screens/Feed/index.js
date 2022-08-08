import React, {useState, useEffect, useCallback} from 'react';
import FeedContainer from './ui';
import postService from '../../../../core/services/posts';
import routes from '../../../../core/constants/routes';

const Feed = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOnFetchPosts = useCallback(
    async (pageNumber = page) => {
      setLoading(true);
      const response = await postService.list(pageNumber);
      // console.log(response);
      const data = await response.data;
      setPosts([...posts, ...data]);
      setPage(pageNumber + 1);
      setLoading(false);
    },
    [setPosts, page, setPage, setLoading],
  );

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
    handleOnFetchPosts();
  }, []);

  return (
    <FeedContainer
      posts={posts}
      likedPosts={likedPosts}
      savedPosts={savedPosts}
      loading={loading}
      onLikePost={handleOnLikePost}
      onSavePost={handleOnSavePost}
      onFetchPosts={handleOnFetchPosts}
      onNavigateToComments={handleOnNavigateToComments}
    />
  );
};

export default Feed;
