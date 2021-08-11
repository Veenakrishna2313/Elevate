import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {
  state = { 
    movies:getMovies() 
   };

   handleDelete=(movie)=>{
    console.log("delete!", movie);
    // filter method used to create a new array
   const movies= this.state.movies.filter((mv)=>mv._id!==movie._id);
console.log("deleted this!", movies.length + movies);
    this.setState({movies});



   }

  render() { 

    // conditional rendering : if the count is zero, then it ll show the first return statement. else it will render the table
    const {length:count}=this.state.movies;
    if(count===0)

    return <h1>There are no movies</h1>

    else

    return (    
    

    <div>
      <h1>Showing {this.state.movies.length} movies in the Database </h1> 
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr> 
      </thead>

      <tbody>
        {this.state.movies.map(movie=>(
          <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger m-3">Delete</button></td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>

     );
  }
}
 
export default Movies;
