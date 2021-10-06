import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import Pagination from './common/pagination';
import { paginate } from '../Utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';
import _ from 'lodash';



class Movies extends Component {
  state = { 
    movies:[],
    currentPage:1,
    pageSize:4,
    genres:[],    
    searchQuery: "",
    selectedGenre: null,    
    sortColumn:{path:"title", order:"asc"}
    };

    componentDidMount(){

      const genres=[{_id:'', name:'All Genres'},...getGenres()];

      this.setState({movies:getMovies(),genres })
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

   handleSort=(sortColumn)=>{
    console.log("Sort by", sortColumn);

    this.setState({sortColumn})

   }
handlePageChange=(page)=>{
  console.log("Page clicked!!", page);
  this.setState({currentPage:page});
}

handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };



getPageData=()=>{
  const {pageSize, currentPage,movies: allMovies, selectedGenre, sortColumn, searchQuery}= this.state;

 let filtered=allMovies;
 if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);


  const sorted=_.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies=paginate(sorted, currentPage, pageSize);

    return {totalCount:filtered.length, data:movies}


}
   

  render() { 

    // conditional rendering : if the count is zero, then it ll show the first return statement. else it will render the table
    const {length:count}=this.state.movies;
    const {pageSize, currentPage, sortColumn, searchQuery }= this.state;
    const {genres, selectedGenre}=this.state;
    
    
    if(count===0) return <p>There are no movies</p>

    const {totalCount,data:movies}= this.getPageData();

   
    return (    
  <div className="row">       
     <div className="col-3 ">
       <ListGroup  items={genres} selectedItem={selectedGenre} ItemSelect={this.handleGenreSelect}>   </ListGroup>
      </div>

    <div className="col ">
      <Link to="/movies/new" className="btn btn-primary mb-3" >New Movie </Link>

      <h4>Showing {totalCount} movies in the Database </h4> 

      <SearchBox value={searchQuery} onChange={this.handleSearch} />

      <MoviesTable movies={movies} onDelete={this.handleDelete} onLike={this.handleLike} onSort={this.handleSort} sortColumn={sortColumn}>
      </MoviesTable>   
   
      <Pagination noOfMovies={totalCount} pageSize={pageSize} currentPage={currentPage}       onClicked={this.handlePageChange}>
      </Pagination>
    </div>
  </div>
     );
  }
}
 
export default Movies;
