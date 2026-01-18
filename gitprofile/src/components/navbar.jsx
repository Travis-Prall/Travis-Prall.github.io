import { memo } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

// MainTabs component - responsible for rendering navigation links
const MainTabsInternal = () => {
  const navLinks = [{ href: "#home", label: "Home" }];

  return (
    <Nav className="me-auto" defaultActiveKey="#home">
      {navLinks.map((link) => (
        <Nav.Item as="li" key={link.href}>
          <Nav.Link href={link.href} onClick={() => {}}>
            {link.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
MainTabsInternal.displayName = "MainTabs";
const MainTabs = memo(MainTabsInternal);

// MainNav component - the main navigation bar
const MainNavInternal = () => (
  <Navbar
    expand="sm"
    bg="dark"
    variant="dark"
    fixed="top"
    collapseOnSelect
    className="shadow-sm"
  >
    <Container fluid>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <MainTabs />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
MainNavInternal.displayName = "MainNav";
export const MainNav = memo(MainNavInternal);
