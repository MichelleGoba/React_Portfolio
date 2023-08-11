import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myLogo from './logo.png';

const Header = () => {
  return (
    <Navbar expand="xl" className="Navbar">
      <Container>
        <img src={myLogo} className='logo'/> 
        <Navbar.Brand href="#home" className='name'><span>M</span>ichelle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Education
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  )
}

export default Header