import { FC, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

import { TPost } from '../types';

type TSortOrder = 'increasing' | 'decreasing' | 'default-sort';

type Props = {
  searchResults: TPost[];
  setSearchResults: (sortedArray: TPost[]) => void;
  searchValue: string;
};

const SortPostsButton: FC<Props> = ({ searchResults, setSearchResults, searchValue }) => {
  const [defaultSort, setDefaultSort] = useState<TPost[]>([]);

  useEffect(() => {
    if (!defaultSort.length) {
      setDefaultSort(searchResults);
    }
  }, [defaultSort.length, searchResults]);

  const handleSortClick = (order: TSortOrder) => {
    let sortResult = [] as TPost[];

    switch (order) {
      case 'increasing':
        sortResult = [...searchResults].sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case 'decreasing':
        sortResult = [...searchResults].sort((a, b) => (a.title > b.title ? -1 : 1));
        break;
      default:
        sortResult = [...defaultSort].filter((post) => post.title.includes(searchValue));
    }
    setSearchResults(sortResult);
  };

  return (
    <Container style={{ position: 'relative' }}>
      <Row>
        <Col sm={4}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Сортировка
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortClick('default-sort')}>
                По умолчанию
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortClick('increasing')}>
                По возрастанию
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortClick('decreasing')}>
                По убыванию
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default SortPostsButton;
