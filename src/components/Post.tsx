import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { avatar } from '../assets';
import { routes } from '../constants';
import { fetchCommentsRequest } from '../store/actions/commentsActions';
import { RootState } from '../store/reducers/rootReducer';
import { TCommentState, TPost } from '../types';
import Comment from './Comment';

const Post: FC<TPost> = ({ id, userId, title, body }) => {
  const dispatch = useDispatch();
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);
  // TODO: change useSelector to useTypedSelector
  const { pending, comments, error } = useSelector(
    (state: RootState) => state.comments,
  ) as TCommentState;

  const navigate = useNavigate();

  const toggleComments = () => {
    setIsCommentsVisible((prev) => !prev);
    dispatch(fetchCommentsRequest(id));
  };

  return (
    <article>
      <h2>{title}</h2>
      {/* TODO: "img" move to component ? */}
      <img
        src={avatar}
        alt="user image"
        onClick={() => navigate(`${routes.USER_INFO}/${userId}`)}
        style={{ cursor: 'pointer' }}
      />
      <p>{body}</p>

      <button type="button" onClick={() => toggleComments()}>
        Comments
      </button>

      {isCommentsVisible && (
        <section>
          {!comments.length && pending && <div>Loading...</div>}
          {/* TODO: add modal for error ? */}
          {error && <div>{`error: ${error}`}</div>}

          {comments?.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              postId={comment.postId}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </section>
      )}
    </article>
  );
};

export default Post;
