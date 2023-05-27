import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import SearchBar from '../components/SearchBar';
import SortPostsButton from '../components/SortPostsButton';
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
      <div className="d-flex flex-row flex-wrap mt-4 mb-4">
        <div className="col-md mb-sm-3">
          <SearchBar
            posts={posts}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </div>

        <div className="col-md">
          <SortPostsButton searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
      </div>

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
