import React, { Component } from 'react';

import Like from './common/like';
import Table from './common/table';
class MoviesTable extends Component  {

  columns=[
    {path:'title', label:'Title'},
    {path:'genre.name', label:'Genre'},
    {path:'numberInStock', label:'Stock'},
    {path:'dailyRentalRate', label:'Rate'},
    {key:'like', content: movie=><Like movie={movie} onClicking={()=>this.props.onLike(movie)}></Like>},
    {key:'delete', content: movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger m-3">Delete</button>}
  ]

    render(){

  const {movies, onSort, sortColumn}=this.props;

  return ( 
<div>
  <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}></Table>
</div>

   );
}
}
 
export default MoviesTable;