import React, {useState, useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import CommentsContainer from './ui';
import CommentService from '../../../../core/services/comments';

const Comments = ({route}) => {
  const {post} = route.params;
  // console.log(post);

  const [comments, setComments] = useState([]);

  const handleOnFetchCommentsPost = useCallback(async () => {
    const response = await CommentService.list(post.id);
    const {data} = response;
    setComments(data);
    // console.log(data);
  }, [setComments]);

  return <CommentsContainer post={post} />;
};

export default Comments;
