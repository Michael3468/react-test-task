import { FC, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import { TPost } from '../types';

type Props = {
  searchResults: TPost[];
  activePage: number;
  setActivePage: (pageNumber: number) => void;
  setItemsOnPage: (items: number) => void;
  itemsOnPage?: number;
};

const PaginationBar: FC<Props> = ({
  searchResults,
  activePage,
  setActivePage,
  setItemsOnPage,
  itemsOnPage = 10,
}) => {
  useEffect(() => {
    setItemsOnPage(itemsOnPage);
  }, [itemsOnPage, setItemsOnPage]);

  const totalItems = searchResults.length;
  const pages = totalItems / itemsOnPage;

  const handlePaginationItemClick = (e: any) => {
    setActivePage(Number(e.target.id));
  };

  const paginationItems = [];
  for (let number = 1; number <= pages; number += 1) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        id={String(number)}
        active={number === activePage}
        onClick={(e) => handlePaginationItemClick(e)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return <Pagination className="d-flex justify-content-center">{paginationItems}</Pagination>;
};

export default PaginationBar;
