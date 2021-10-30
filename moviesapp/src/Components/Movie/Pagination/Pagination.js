import React from 'react';
import ReactPaginate from 'react-paginate';



export default function MyPagination({ pageCount, handlePageChange }) {


  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={pageCount}
      marginPagesDisplayed={4}
      onPageChange={handlePageChange}
      containerClassName={'pagination justify-content-center'}
      previousLinkClassName={'page-link'}
      breakClassName={'page-link'}
      nextLinkClassName={'page-link'}
      pageClassName={'page-link'}
      disabledClassNae={'disabled'}
      activeClassName={'active'}

    />

  );
}
