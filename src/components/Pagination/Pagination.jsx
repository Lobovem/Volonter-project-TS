import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NewsList } from '../NewsList/NewsList';
import { useSelector } from 'react-redux';
import { listNewsSelector } from '../../redux/slice/contentSlice';
import s from './Pagination.module.scss';

export const Pagination = ({ itemsPerPage }) => {
  const listNews = useSelector(listNewsSelector);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [item, setItem] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = item + itemsPerPage;
  const currentItems = listNews.slice(item, endOffset);
  const pageCount = Math.ceil(listNews.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listNews.length;
    setItem(newOffset);
  };

  return (
    <>
      <NewsList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        nextClassName={s.pagination__btn}
        previousClassName={s.pagination__btn}
        renderOnZeroPageCount={null}
        className={s.pagination}
        pageLinkClassName={s.pagination__link}
        activeClassName={s.active}
        disabledLinkClassName={s.disabled}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        // hrefBuilder={(pageNumber, pageCount) => (pageNumber <= 3 && pageNumber <= pageCount ? `/page/${pageNumber}` : '#')}
        // hrefAllControls
      />
    </>
  );
};
