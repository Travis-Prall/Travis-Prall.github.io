import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class MainNav extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Navbar expand='sm' bg='dark' variant='dark' fixed='top'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='justify-content-start' defaultActiveKey='#home'>
                <Nav.Item as='li' className='me-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='me-auto'>
                  <Nav.Link href='#about'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='me-auto'>
                  <Nav.Link href='#resume'>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='me-auto'>
                  <Nav.Link href='#stack'>Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='me-auto'>
                  <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default MainNav;
