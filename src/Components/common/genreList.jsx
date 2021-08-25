import React, { Component } from 'react'

const GenreList = (props) => {

   const {genres} =props;

   console.log("Props for genre",props);


  return (
    
        <div className="list-group">
          <a className="list-group-item list-group-item-action active">
            All Genres
           </a>
     { genres.map((genre) =>
    <a key={genre} >{genre}</a>
    )}
 
  
</div>
    
    );
}
 
export default GenreList;