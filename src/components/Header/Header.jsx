import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Collapse, Toggle} from 'react-bootstrap';
import '../Header/Header.css'


function Header() {
  return (
    // <Navbar expand="lg" className="fixed-top">
    <Navbar className="fixed-top">
      <Container >
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="header-nav mx-auto fs-6 flex-column flex-sm-row"> */}
          <Nav className="header-nav mx-auto fs-6">
            <Nav.Link href="#About" className='header-nav-link'>About</Nav.Link>
            <Nav.Link href="#Skills" className='header-nav-link'>Skills</Nav.Link>
            <Nav.Link href="#Projects" className='header-nav-link'>My Projects</Nav.Link>
            <Nav.Link href="#Story" className='header-nav-link'>My Story</Nav.Link>
            <Nav.Link href="#Contacts" className='header-nav-link'>Contacts</Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
export default Header