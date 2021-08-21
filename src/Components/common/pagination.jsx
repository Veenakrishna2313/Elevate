import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

  const {noOfMovies, pageSize}=props;

  const pageCount=Math.ceil(noOfMovies/pageSize); // converts floating number to integer
  console.log("page count", pageCount);

// returns array of pages
 const pages= _.range(1,pageCount+1);
 console.log("pages", pages);
 if(pageCount===1) return null;

  return ( 
      <div>
    <nav aria-label="...">
    <ul className="pagination pagination-lg">
      {pages.map((page)=> <li  key={page} className="page-item disabled">
        <a  className="page-link" href ="#">{page}</a>
      </li> )}
      
      
    </ul>
  </nav>
      </div>
    );
}
 

export default Pagination;