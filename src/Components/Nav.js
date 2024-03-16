import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
     <Navbar.Brand className='ms-5'></Navbar.Brand>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ms-auto , me-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
   
    </Navbar>
  );
}

export default CustomNavbar;
