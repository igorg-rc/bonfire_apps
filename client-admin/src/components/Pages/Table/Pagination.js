  
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, setPrevPage, setNextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    <>
      <div className='pagination'>
        <a className="next-page__link" onClick={()=> setPrevPage(1)}>Prev</a>
        <ul>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
        <a className="next-page__link" onClick={()=> setNextPage(1)}>Next</a>
      </div>
    </>
  );
};

export default Pagination;