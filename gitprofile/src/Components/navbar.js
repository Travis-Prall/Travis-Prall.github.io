import { Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useLocation, NavLink, Outlet } from 'react-router-dom';

function MainNav() {
  return (
    <Container fluid className='pb-5'>
      <Row>
        <Navbar expand='sm' bg='dark' variant='dark' fixed='top'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <MainTabs />

            <Outlet />
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}

function MainTabs() {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
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
          <Nav.Link as={NavLink} to='/art'>
            Art
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  } else if (location.pathname === '/art') {
    return (
      <Nav className='justify-content-start' defaultActiveKey='#photography'>
        <Nav.Item as='li' className='me-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li' className='me-auto'>
          <Nav.Link href='#photography'>Photography</Nav.Link>
        </Nav.Item>
        <Nav.Item as='li' className='me-auto'>
          <Nav.Link href='#decor'>Decor</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  } else {
    return (
      <Nav className='justify-content-start' defaultActiveKey='#home'>
        <Nav.Item as='li' className='me-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li' className='me-auto'>
          <Nav.Link as={NavLink} to='/art'>
            Art
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default MainNav;
