import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Like = props => {
  
  console.log("like",props.movie.likes);
      let classes="fa-heart";
        classes +=props.movie.likes===false ? " far": " fas";
        console.log("classes",classes);
      return <i  style={{cursor:'pointer'}} onClick={props.onClicking} className={classes}></i>;
    
}
 
export default Like;