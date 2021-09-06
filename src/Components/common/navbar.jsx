import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom';
const NavBar = () => {
  return ( 
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Elevate</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/movies">Movies </NavLink>
      <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
      <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
    
    </div>
  </div>
</nav>
   );
}
 
export default NavBar;