import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import Post from '../components/Post';
import { routes } from '../constants';
import { fetchPostRequest } from '../store/actions/postActions';
import { fetchUserInfoRequest } from '../store/actions/userInfoActions';
import { RootState } from '../store/reducers/rootReducer';
import { TPost, TPostState, TUserInfo, TUserInfoState } from '../types';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<TUserInfo>(null);
  const { pending, user, error } = useSelector((state: RootState) => state.user) as TUserInfoState;
  const {
    pending: postsPending,
    posts,
    error: postsError,
  } = useSelector((state: RootState) => state.posts) as TPostState;

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchUserInfoRequest(id));
      dispatch(fetchPostRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {pending && <div>Loading...</div>}
      {error && <div>{`error: ${error}`}</div>}
      {userInfo && (
        <Card style={{ padding: 20, maxWidth: 320 }}>
          <span style={{ fontWeight: 'bold', fontSize: 22 }}>User Info:</span>
          <div>{`Name: ${userInfo?.name}`}</div>
          <div>{`Username: ${userInfo?.username}`}</div>
          <div>{`Email: ${userInfo?.email}`}</div>
          <div>{`Website: ${userInfo?.website}`}</div>
          <div>{`Phone: ${userInfo?.phone}`}</div>
          <div>{`Company: ${userInfo?.company?.name}`}</div>
          <div>{`City: ${userInfo?.address?.city}`}</div>
        </Card>
      )}

      <Button
        type="button"
        variant="success"
        style={{ margin: '20px 0' }}
        onClick={() => navigate(routes.HOME)}
      >
        Go Back
      </Button>

      {postsPending && <div>Loading...</div>}
      {postsError && <div>{`error: ${error}`}</div>}
      {!postsPending &&
        !postsError &&
        posts?.map((post: TPost) => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
    </>
  );
};

export default UserInfo;
