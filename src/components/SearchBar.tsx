import {
  Dispatch,
  FC,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { TPost } from '../types';

type Props = {
  posts: TPost[];
  searchResults: TPost[];
  setSearchResults: Dispatch<SetStateAction<TPost[]>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const SearchBar: FC<Props> = ({
  posts,
  searchResults,
  setSearchResults,
  searchValue,
  setSearchValue,
}) => {
  const [resultVisible, setResultVisible] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchValue.length) {
      setSearchResults(posts.filter((post) => post.title.includes(searchValue)));
    } else {
      setSearchResults(posts);
    }
  }, [posts, searchValue, setSearchResults]);

  useEffect(() => {
    if (searchValue.length) {
      setResultVisible(true);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    setSearchValue('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setResultVisible(false);
    }
  };

  const setResultsAndHide = (e: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => {
    setSearchResults(posts.filter((post) => post.id === Number((e.target as HTMLElement).id)));
    setResultVisible(false);
  };

  const handlePostClick = (e: MouseEvent<HTMLLIElement>) => {
    setResultsAndHide(e);
  };

  const handlePostKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      setResultsAndHide(e);
    }
  };

  return (
    <Container style={{ position: 'relative' }}>
      <Row>
        <Col sm={12}>
          <InputGroup className="d-flex">
            <Form.Control
              type="search"
              placeholder="Введите название статьи"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              ref={searchInputRef}
            />
            <Button
              variant="outline-secondary"
              onClick={handleClick}
              disabled={!searchValue.length}
            >
              X
            </Button>
          </InputGroup>

          {/* search result container */}
          {searchValue.length > 0 && resultVisible && searchResults.length > 0 && (
            <div
              className="mt-2 pt-2 pb-2 shadow-lg me-2 bg-white"
              style={{
                maxHeight: '250px',
                maxWidth: '350px',
                overflowY: 'scroll',
                position: 'absolute',
                borderRadius: 5,
                border: '1px solid black',
                zIndex: 5,
              }}
            >
              <ul className="ps-0 m-0" tabIndex={-1}>
                {searchResults.map((post, index) => (
                  <li
                    tabIndex={0}
                    id={String(post.id)}
                    key={post.id}
                    className={`p-2 ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={handlePostClick}
                    onKeyDown={handlePostKeyDown}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default SearchBar;
