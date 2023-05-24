import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import { fetchPostRequest } from '../store/actions/postActions';
import { RootState } from '../store/reducers/rootReducer';
import { TPost, TPostState } from '../types';

const Main = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector((state: RootState) => state.posts) as TPostState;

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  return (
    <main>
      {/* TODO: add Loader component */}
      {!posts.length && pending && <div>Loading...</div>}
      {error && <div>{`error: ${error}`}</div>}

      {posts?.map((post: TPost) => (
        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </main>
  );
};

export default Main;
