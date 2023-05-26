import { FC, useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { TPost } from '../types';

type Props = {
  posts: TPost[];
};

const SearchBar: FC<Props> = ({ posts }) => {
  const [searchResults, setSearchResults] = useState<TPost[]>(posts);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (searchValue.length) {
      setSearchResults(() => posts.filter((post) => post.title.includes(searchValue)));
    } else {
      setSearchResults(posts);
    }
  }, [posts, searchValue]);

  const handleClick = () => {
    setSearchValue('');
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
            />
            <Button
              variant="outline-secondary"
              onClick={handleClick}
              disabled={!searchValue.length}
            >
              {searchValue.length ? 'X' : '🔎️'}
            </Button>
          </InputGroup>

          {/* search result container */}
          {searchValue.length > 0 && (
            <div
              className="mt-2 shadow-lg me-2"
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
