import React, { Component } from 'react'

const Pagination = (props) => {
  return ( 
      <div>
    <nav aria-label="...">
    <ul class="pagination pagination-lg">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">1</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
    </ul>
  </nav>
      </div>
    );
}
 

export default Pagination;