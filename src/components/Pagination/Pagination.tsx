import styles from './Pagination.module.scss';
import { useCallback } from 'react';
import ReactPaginate from 'react-paginate';
interface PaginationProps {
  value: number,
  onChangePage: (page: number) => void;
}

export const Pagination = ({ value, onChangePage }: PaginationProps) => {
  const handlePageClick = useCallback((e) => {
    onChangePage(e.selected + 1);
  }, [onChangePage]);

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={value - 1}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
