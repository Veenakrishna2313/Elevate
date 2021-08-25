import React, { Component } from 'react'

const GenreList = (props) => {

   const {genres, textProperty, nameProperty, onItemSelect} =props;

   console.log("Props for genre",props);


  return (
    <div>
        <ul className="list-group">
             <li className="list-group-item active">All Genres</li>
        {genres.map((genre)=>
        <li key={genre[textProperty]} onClick={()=>onItemSelect(genre._id)} className="list-group-item disabled">{genre[nameProperty]}</li>

        )}           
          
 
  
</ul>
    </div>
    );
}
 
export default GenreList;