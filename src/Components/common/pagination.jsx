import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

  const {noOfMovies, pageSize, currentPage,  onClicked}=props;
  console.log("Current page",currentPage);

  const pageCount=Math.ceil(noOfMovies/pageSize); // converts floating number to integer
  console.log("page count", pageCount);

// returns array of pages so as to dynamically render the pages as 1,2,3 based on the number of movies we get, instead of hard coding them .
 const pages= _.range(1,pageCount+1);
 console.log("pages", pages);
 if(pageCount===1) return null;// if all movies fit in one page, we not npt show the pagination.

  return ( 

    
      <div>
    <nav aria-label="...">
    <ul className="pagination pagination-lg">
      {pages.map((page)=>
       <li  key={page}  className={page===currentPage? "page-item active": "page-item "}>
        <a className="page-link" onClick={()=>onClicked(page)}>{page}</a>
      </li> )}
      
      
    </ul>
  </nav>
      </div>
    );
}
 

export default Pagination;