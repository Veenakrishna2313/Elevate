import React from 'react';
import propTypes from 'prop-types'
import _ from 'lodash';

const Pagination = ({noOfMovies, pageSize, currentPage,  onClicked}) => {

 
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
        <a className="page-link"  onClick={()=>onClicked(page)}>{page}</a>
      </li> )}
      
      
    </ul>
  </nav>
      </div>
    );
}
 
// this is basically used to type check. eg: is the use who is using the pagination component given the right type of inputs. eg: instead of giving number 
// of movies, if they give abc? there shoild be some form of type checking. For that we use Proptypes(checking the type of props/ see the props obj above)

Pagination.propTypes={
  noOfMovies:propTypes.number.isRequired,
  pageSize:propTypes.number.isRequired, 
  currentPage:propTypes.number.isRequired, 
  onClicked:propTypes.func.isRequired

}

export default Pagination;