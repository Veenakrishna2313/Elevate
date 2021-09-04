import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar';

const NavBar = () => {
  return ( 
    <Navbar bg="light" variant="light">    
    <Navbar.Brand href="/movies">Elevate</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/movies">Movies</Nav.Link>
      <Nav.Link href="/customers">Customers</Nav.Link>
      <Nav.Link href="/rentals">Rentals</Nav.Link>
      
    </Nav>
    
  </Navbar>
   );
}
 
export default NavBar;