import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';
import TableBody from './common/tableBody';



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
   <table className="table">
      <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn} ></TableHeader>
      <TableBody data={movies} columns={this.columns}></TableBody>
    </table>
</div>

   );
}
}
 
export default MoviesTable;