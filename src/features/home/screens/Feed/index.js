import React, {useState, useEffect, useCallback} from 'react';
import FeedContainer from './ui';
import postService from '../../../../core/services/posts';
import routes from '../../../../core/constants/routes';

const Feed = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const handleOnFetchPosts = useCallback(
    async (pageNumber = page, shouldRefresh = false) => {
      setLoading(true);
      const response = await postService.list(pageNumber);
      // console.log(response);
      const {data} = response;
      setPosts(shouldRefresh ? data : [...posts, ...data]);
      setPage(pageNumber + 1);
      setLoading(false);
    },
    [setPosts, page, setPage, setLoading],
  );

  const handleOnLikePost = postId => {
    // console.log(postId);
    // setLikedPosts(oldState => !oldState);
    if (likedPosts?.includes(postId)) {
      setLikedPosts(likedPosts.filter(post => post !== postId));
    } else {
      setLikedPosts(oldState => [...oldState, postId]);
    }
    // Verificar se esse post já tem o seu like
    // Atualizar a quantidade de likes na api
    // Atualizar a lista de likedPosts
  };

  const handleOnSavePost = useCallback(postId => {
    // Verificar se esse post já está salvo
    // Atualizar a lista de posts salvos
  }, []);

  const handleOnNavigateToComments = useCallback(
    post => {
      // console.log(post);
      navigation.navigate(routes.Comments.itself, {
        screen: routes.Comments.Home,
        params: {
          post,
        },
      });
    },
    [navigation],
  );

  useEffect(() => {
    handleOnFetchPosts();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);

    await handleOnFetchPosts(page, true);

    setRefreshing(false);
  };

  return (
    <FeedContainer
      posts={posts}
      loading={loading}
      likedPosts={likedPosts}
      savedPosts={savedPosts}
      refreshing={refreshing}
      onFetchPosts={handleOnFetchPosts}
      onLikePost={handleOnLikePost}
      onSavePost={handleOnSavePost}
      onNavigateToComments={handleOnNavigateToComments}
      onRefreshList={refreshList}
    />
  );
};

export default Feed;
