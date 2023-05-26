import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import SearchBar from '../components/SearchBar';
import { fetchPostRequest } from '../store/actions/postActions';
import { RootState } from '../store/reducers/rootReducer';
import { TPost, TPostState } from '../types';

const Main = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector((state: RootState) => state.posts) as TPostState;
  const [searchResults, setSearchResults] = useState<TPost[]>([]);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts]);

  return (
    <main>
      <SearchBar posts={posts} searchResults={searchResults} setSearchResults={setSearchResults} />
      {/* TODO: add Loader component */}
      {!posts.length && pending && <div>Loading...</div>}
      {error && <div>{`error: ${error}`}</div>}

      {searchResults?.map((post: TPost) => (
        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </main>
  );
};

export default Main;
