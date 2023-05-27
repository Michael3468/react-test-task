import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

import { TPost } from '../types';

type TSortOrder = 'increasing' | 'decreasing';

type Props = {
  searchResults: TPost[];
  setSearchResults: (sortedArray: TPost[]) => void;
};

const SortPostsButton: FC<Props> = ({ searchResults, setSearchResults }) => {
  const handleSortClick = (order: TSortOrder) => {
    let sortResult = [] as TPost[];
    if (order === 'increasing') {
      sortResult = [...searchResults].sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    if (order === 'decreasing') {
      sortResult = [...searchResults].sort((a, b) => (a.title > b.title ? -1 : 1));
    }

    setSearchResults(sortResult);
  };

  return (
    <Container style={{ position: 'relative' }}>
      <Row>
        <Col sm={4}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Сортировка постов
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
