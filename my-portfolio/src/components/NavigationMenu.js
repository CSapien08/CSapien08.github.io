import React, {Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import myLogo from '../imgs/sapiano08-01.svg'
import myLogo1 from '../imgs/sapiano08-01-01.svg'


class NavigationMenu extends Component {
    render() {
      return (
      <>
        <Navbar fixed="top" fluid bg="dark" variant='dark' expand="xl">
          <Container className='container-style'>
            <Navbar.Brand className='nav-brand' href="/">
              <img
                  alt="my-logo"
                  src={myLogo1}
                  className="my-logo"
                  
                />{'   '}
                &nbsp; CHAUNCY SAPIEN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="aboutme">About Me</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="life">My Life and Hobbies</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      )
    }
  }
  
  export default NavigationMenu;
  