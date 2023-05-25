import { Nav, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const MainNav = () => (
  <Container fluid className="pb-5">
    <Row>
      <Navbar
        expand="sm"
        bg="dark"
        variant="dark"
        fixed="top"
        collapseOnSelect="true"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <MainTabs />
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Container>
);

function MainTabs() {
  return (
    <Nav className="justify-content-start" defaultActiveKey="#home">
      <Nav.Item as="li" className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
