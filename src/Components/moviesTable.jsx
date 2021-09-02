import Like from './common/like';

const MoviesTable = (props) => {

  const {movies, onDelete, onLike, onSort}=props;

  return ( 
<div>
   <table className="table">
      <thead>
        <tr>
          <th onClick={()=>onSort("title")}>Title</th>
          <th onClick={()=>onSort("genre.name")}>Genre</th>
          <th onClick={()=>onSort("numberInStock")}>Stock</th>
          <th onClick={()=>onSort("dailyRentalRate")}>Rate</th>
          <th></th>
        </tr> 
      </thead>

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
 
export default MoviesTable;