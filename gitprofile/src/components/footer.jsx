import React from "react"; // Removed useState, useEffect as they are not needed
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialMediaBar } from "./social"; // Removed .jsx extension

// Functional component can be directly exported and memoized if needed.
// No need for a separate FooterComponent if it's not used elsewhere or for specific HOC patterns.
const Footer = React.memo(() => {
  // Directly use React.memo here
  const currentYear = new Date().getFullYear(); // Calculate year directly, no need for state/effect

  return (
    <Container fluid as="footer" className="py-3 mt-auto">
      {" "}
      {/* Added padding and margin for better spacing */}
      <Row className="justify-content-center mb-2">
        {" "}
        {/* Centered social networks and added margin */}
        <Col xs="auto">
          {" "}
          {/* Ensure Networks take only necessary space */}
          <SocialMediaBar />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="copyright text-center">
          {" "}
          {/* Ensured copyright is centered and takes auto width */}
          &copy; Copyright {currentYear} Travis Prall
        </Col>
      </Row>
    </Container>
  );
});

Footer.displayName = "Footer"; // Added display name for better debugging

export { Footer }; // Consistent export style
