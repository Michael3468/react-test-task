import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// TODO: re-export components from /components/index.ts
import Loader from '../components/Loader';
import PaginationBar from '../components/PaginationBar';
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
  const [searchValue, setSearchValue] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);
  const [startItem, setStartItem] = useState<number>(0);
  const [endItem, setEndItem] = useState<number>(0);
  const [itemsOnPage, setItemsOnPage] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts]);

  useEffect(() => {
    setStartItem((activePage - 1) * itemsOnPage);
    setEndItem(activePage * itemsOnPage);
  }, [activePage, itemsOnPage]);

  return (
    <main>
      <div className="d-flex flex-row flex-wrap mt-4 mb-4">
        <div className="col-md mb-sm-0 mb-3">
          <SearchBar
            posts={posts}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setActivePage={setActivePage}
          />
        </div>

        <div className="col-md">
          <SortPostsButton
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchValue={searchValue}
          />
        </div>
      </div>

      <PaginationBar
        searchResults={searchResults}
        activePage={activePage}
        setActivePage={setActivePage}
        itemsOnPage={10}
        setItemsOnPage={setItemsOnPage}
      />

      {!posts.length && pending && <Loader />}
      {error && <div>{`error: ${error}`}</div>}

      {searchResults?.slice(startItem, endItem).map((post: TPost) => (
        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </main>
  );
};

export default Main;
