import { memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialMediaBar } from "./social";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid as="footer" className="d-flex align-items-center justify-content-center py-2 mt-auto" style={{ height: "56px" }}>
      <Row className="m-0 w-100 justify-content-center">
        <Col xs="auto" className="copyright text-center p-0 align-self-center">
          &copy; Copyright {currentYear} Travis Prall
        </Col>
      </Row>
    </Container>
  );
});

Footer.displayName = "Footer";

export { Footer };
