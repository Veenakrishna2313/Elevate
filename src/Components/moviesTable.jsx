import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';


class MoviesTable extends Component  {

  columns=[
    {path:'title', label:'Title'},
    {path:'genre.name', label:'Genre'},
    {path:'numberInStock', label:'Stock'},
    {path:'dailyRentalRate', label:'Rate'},
    {key:'like'},
     {key:'delete'}

  ]

    render(){

  const {movies, onDelete, onLike, onSort, sortColumn}=this.props;

  return ( 
<div>
   <table className="table">
      <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn} ></TableHeader>

      <tbody>
        {movies.map(movie=>(
          <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><Like movie={movie} onClicking={()=>onLike(movie)}></Like></td>
          
          <td><button onClick={()=>onDelete(movie)} className="btn btn-danger m-3">Delete</button></td>
        </tr>
        ))}
        
      </tbody>
    </table>
</div>

   );
}
}
 
export default MoviesTable;