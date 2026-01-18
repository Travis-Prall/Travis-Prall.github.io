import { memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialMediaBar } from "./social";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid as="footer" className="py-3 mt-auto">
      <Row className="justify-content-center mb-2">
        <Col xs="auto">
          <SocialMediaBar />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="copyright text-center">
          &copy; Copyright {currentYear} Travis Prall
        </Col>
      </Row>
    </Container>
  );
});

Footer.displayName = "Footer";

export { Footer };
