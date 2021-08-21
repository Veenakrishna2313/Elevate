import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

class like extends Component {
  state = { 

   }
  render() { 
console.log("like",this.props.movie.likes);
    let classes="fa-heart";
      classes +=this.props.movie.likes===false ? " far": " fas";
      console.log("classes",classes);
    return <i  style={{cursor:'pointer'}} onClick={this.props.onClicking} className={classes}></i>;
     
  }
}
 
export default like;