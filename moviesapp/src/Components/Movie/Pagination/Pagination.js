import React from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'


export default function MyPagination({ pageCount,handlePageChange }) {
 

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={pageCount}
      marginPagesDisplayed={10}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      previousLinkClassName={'page-link'}
      breakClassName={'page-link'}
      nextLinkClassName={'page-link'}
      pageClassName={'page-link'}
      disabledClassNae={'disabled'}
      activeClassName={'active'}

    />

  );
}
