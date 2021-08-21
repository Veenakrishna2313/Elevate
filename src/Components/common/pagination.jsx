import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

  const {noOfMovies, pageSize, currentPage,  onClicked}=props;
  console.log("Current page",currentPage);

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
      {pages.map((page)=>
       <li  key={page}  className="page-item ">
        <a className="page-link" onClick={()=>onClicked(page)}>{page}</a>
      </li> )}
      
      
    </ul>
  </nav>
      </div>
    );
}
 

export default Pagination;