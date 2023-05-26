import { FC, useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { TPost } from '../types';

type Props = {
  posts: TPost[];
  searchResults: TPost[];
  setSearchResults: (results: TPost[]) => void;
};

const SearchBar: FC<Props> = ({ posts, searchResults, setSearchResults }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [resultVisible, setResultVisible] = useState<boolean>(false);

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

  const handleClick = () => {
    setSearchValue('');
  };

  const handleSearchKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setResultVisible(false);
    }
  };

  return (
    <Container className="mt-4 mb-4" style={{ position: 'relative' }}>
      <Row>
        <Col sm={4}>
          <InputGroup className="d-flex">
            <Form.Control
              type="search"
              placeholder="Введите название статьи"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => handleSearchKeyDown(e)}
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
          {searchValue.length > 0 && resultVisible && (
            <div
              className="mt-2 pt-2 pb-2 shadow-lg me-2 bg-white"
              style={{
                maxHeight: '250px',
                maxWidth: '350px',
                overflowY: 'scroll',
                position: 'absolute',
                borderRadius: 5,
              }}
            >
              <ul className="ps-0 m-0" tabIndex={-1}>
                {searchResults.map((post, index) => (
                  <li
                    tabIndex={0}
                    key={post.id}
                    className={`p-2 ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`}
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
