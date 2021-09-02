import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

import 'font-awesome/css/font-awesome.css';
import Pagination from './common/pagination';
import { paginate } from '../Utils/paginate';

import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';



class Movies extends Component {
  state = { 
    movies:[],
    currentPage:1,
    pageSize:4,
    genres:[]
    };

    componentDidMount(){

      const genres=[{_id:" ", name:'All Genres'},...getGenres()]

      this.setState({movies:getMovies(),genres })
    }

    handleGenreSelect=(genre)=>{
     console.log("Genre clicked!!",genre );
     this.setState({selectedGenre:genre, currentPage:1});
     
     
   }

   handleLike=(movie)=>{
console.log("clicked!", movie._id + "liked " + movie.likes);  
    const movies=[...this.state.movies];
    console.log("movies array",movies);

    const index=movies.indexOf(movie);
     console.log("Index", index);
   movies[index]={...movies[index]};
     movies[index].likes=!movies[index].likes;
     this.setState({movies});

   }

   handleDelete=(movie)=>{
    console.log("delete!", movie);
    // filter method used to create a new array
   const movies= this.state.movies.filter((mv)=>mv._id!==movie._id);
console.log("deleted this!", movies.length + movies);
    this.setState({movies});

   }

   handleSort=(target)=>{
    console.log("Sort by", target);

   }
handlePageChange=(page)=>{
  console.log("Page clicked!!", page);
  this.setState({currentPage:page});
}
   

  render() { 

    // conditional rendering : if the count is zero, then it ll show the first return statement. else it will render the table
    const {length:count}=this.state.movies;
    const {pageSize, currentPage,movies: allMovies, selectedGenre}= this.state;
    const {genres}=this.state;
    
    
    if(count===0) return <h1>There are no movies</h1>


    const filtered=selectedGenre && selectedGenre._id?allMovies.filter(m=>m.genre._id===selectedGenre._id): allMovies;

    const movies=paginate(filtered, currentPage, pageSize);

    return (    
  <div className="row">       
     <div className="col-3 ">
       <ListGroup 
       items={genres}
       selectedItem={this.state.selectedGenre} 
       ItemSelect={this.handleGenreSelect}>
        </ListGroup>
      </div>

    <div className="col ">
      <h1>Showing {filtered.length} movies in the Database </h1> 
      <MoviesTable 
      movies={movies} 
      onDelete={this.handleDelete} 
      onLike={this.handleLike}
      onSort={this.handleSort}>
      </MoviesTable>   
   
      <Pagination 
      noOfMovies={filtered.length} 
      pageSize={pageSize} 
      currentPage={currentPage} 
      onClicked={this.handlePageChange}>
      </Pagination>
    </div>
  </div>
     );
  }
}
 
export default Movies;
