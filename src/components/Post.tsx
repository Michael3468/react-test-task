import { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Comment, Error, Loader } from '.';
import { avatar } from '../assets';
import { routes } from '../constants';
import { fetchCommentsRequest } from '../store/actions/commentsActions';
import { RootState } from '../store/reducers/rootReducer';
import { TComment, TCommentState, TPost } from '../types';

const Post: FC<TPost> = ({ id, userId, title, body }) => {
  const dispatch = useDispatch();
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);
  const { pending, comments, error } = useSelector(
    (state: RootState) => state.comments,
  ) as TCommentState;
  const [postComments, setPostComments] = useState<TComment[]>([]);

  const navigate = useNavigate();

  const toggleComments = () => {
    setIsCommentsVisible((prev) => !prev);
    dispatch(fetchCommentsRequest(id));
  };

  useEffect(() => {
    if (comments.postId === id) {
      setPostComments(comments.data);
    }
  }, [comments, id]);

  return (
    <article className="mb-5" style={{ border: '1px solid black', borderRadius: 5, padding: 20 }}>
      <div className="d-flex flex-column flex-sm-row">
        <img
          src={avatar}
          className="mx-auto my-2 ms-sm-0 me-sm-3 rounded-circle"
          alt="user image"
          onClick={() => navigate(`${routes.USER_INFO}/${userId}`)}
          style={{
            cursor: 'pointer',
            width: 50,
            height: 50,
          }}
        />
        <section>
          <h2 className="text-center">{title}</h2>

          <p>{body}</p>

          <Button className="mb-3" type="button" variant="success" onClick={() => toggleComments()}>
            Комментарии
          </Button>

          {isCommentsVisible && (
            <section>
              {!postComments.length && pending && <Loader loaderType="comment" />}
              {error && <Error error={error} />}

              {postComments?.map((comment) => (
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
        </section>
      </div>
    </article>
  );
};

export default Post;
