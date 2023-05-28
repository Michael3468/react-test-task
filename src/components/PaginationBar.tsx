import { Dispatch, FC, MouseEventHandler, SetStateAction, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import { useScreenSize } from '../libs/hooks/useScreenSize';
import { TPost } from '../types';

type Props = {
  searchResults: TPost[];
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  setItemsOnPage: Dispatch<SetStateAction<number>>;
  itemsOnPage?: number;
};

const PaginationBar: FC<Props> = ({
  searchResults,
  activePage,
  setActivePage,
  setItemsOnPage,
  itemsOnPage = 10,
}) => {
  const isLargeScreen = useScreenSize('(min-width: 428px)');

  useEffect(() => {
    setItemsOnPage(itemsOnPage);
  }, [itemsOnPage, setItemsOnPage]);

  const totalItems = searchResults.length;
  const pages = Math.floor(totalItems / itemsOnPage);
  const totalPages = pages > 1 ? pages : 1;

  const handlePaginationItemClick: MouseEventHandler<HTMLLIElement> = (e) => {
    setActivePage(Number((e.target as HTMLElement)?.id));
  };

  const paginationItems = [];

  // First & Prev pagination elements +
  paginationItems.push(
    <Pagination.First
      key="item-first"
      disabled={activePage === 1}
      onClick={() => setActivePage(1)}
    />,
    <Pagination.Prev
      key="item-prev"
      disabled={activePage === 1}
      onClick={() => setActivePage((prev) => prev - 1)}
    />,
  );
  // First & Prev pagination elements -

  // First Item pagination element +
  if (activePage !== 1 && activePage - 1 !== 1) {
    paginationItems.push(
      <Pagination.Item key="item-first-number" id="1" onClick={handlePaginationItemClick}>
        {1}
      </Pagination.Item>,
    );
  }
  // First Item pagination element -

  // Ellipsis pagination element +
  if (![1, 2, 3].includes(activePage)) {
    paginationItems.push(<Pagination.Ellipsis key="ellipsis-start" />);
  }
  // Ellipsis pagination element -

  // Center Items pagination elements +
  if (activePage - 1 > 0) {
    paginationItems.push(
      <Pagination.Item
        key={activePage - 1}
        id={(activePage - 1).toString()}
        onClick={handlePaginationItemClick}
      >
        {activePage - 1}
      </Pagination.Item>,
    );
  }

  paginationItems.push(
    <Pagination.Item
      active
      key={activePage}
      id={activePage.toString()}
      onClick={handlePaginationItemClick}
    >
      {activePage}
    </Pagination.Item>,
  );

  if (activePage + 1 <= totalPages) {
    paginationItems.push(
      <Pagination.Item
        key={activePage + 1}
        id={(activePage + 1).toString()}
        onClick={handlePaginationItemClick}
      >
        {activePage + 1}
      </Pagination.Item>,
    );
  }
  // Center Items pagination elements -

  // Ellipsis pagination element +
  if (![totalPages, totalPages - 1, totalPages - 2].includes(activePage)) {
    paginationItems.push(<Pagination.Ellipsis key="ellipsis-end" />);
  }
  // Ellipsis pagination element -

  // Last Item pagination element +
  if (activePage !== totalPages && activePage !== totalPages - 1) {
    paginationItems.push(
      <Pagination.Item
        key="item-last-number"
        id={totalPages.toString()}
        onClick={handlePaginationItemClick}
      >
        {totalPages}
      </Pagination.Item>,
    );
  }
  // Last Item pagination element -

  // Last & Next pagination elements +
  paginationItems.push(
    <Pagination.Next
      key="item-next"
      disabled={activePage === totalPages}
      onClick={() => setActivePage((prev) => prev + 1)}
    />,
    <Pagination.Last
      key="item-last"
      disabled={activePage === totalPages}
      onClick={() => setActivePage(totalPages)}
    />,
  );
  // Last & Next pagination elements -

  return (
    <Pagination className="d-flex justify-content-center" size={isLargeScreen ? undefined : 'sm'}>
      {paginationItems}
    </Pagination>
  );
};

export default PaginationBar;
