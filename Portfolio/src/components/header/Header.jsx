import React, { useState, useRef } from 'react';
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import myLogo from "../../images/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navCollapseRef = useRef();

  const handleNavLinkClick = () => {
    if (navCollapseRef.current) {
      navCollapseRef.current.style.height = "0px"; // Manually set height to close the Navbar
    }
    setExpanded(false); // Close the Navbar by setting expanded to false
  };

  return (
    <Navbar expand="xl" className="Navbar sticky-top" expanded={expanded}>
      <Container className="nav">
        <img src={myLogo} className="logo" />
        <Navbar.Brand href="#home" className="name">
          <span>M</span>ichelle
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the expanded state on button click
        />
        <Navbar.Collapse id="basic-navbar-nav" ref={navCollapseRef}>
          <Nav className="ms-auto">
          {/* toggle the Navbar's collapse state and close it. */}
            <Nav.Link href="#home" className="nav-link" onClick={handleNavLinkClick}>  
              Home
            </Nav.Link>  
            {/* Dropdown */}
            <NavDropdown href="about" title="About" id="basic-nav-dropdown"> 
              <NavDropdown.Item href="#about" className="dropdown" onClick={handleNavLinkClick}>
                About Me
              </NavDropdown.Item>
              <NavDropdown.Item href="#skills" className="dropdown" onClick={handleNavLinkClick}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Item href="#education" className="dropdown" onClick={handleNavLinkClick}>
                Education
              </NavDropdown.Item>
            </NavDropdown>
            {/* Nav links */}
            <Nav.Link href="#portfolio" className="nav-link" onClick={handleNavLinkClick}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link" onClick={handleNavLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

