import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Networks } from "./social";

export const Footer = () => (
  <Container fluid as="footer">
    <Row>
      <Networks />
    </Row>
    <Row className="justify-content-md-center">
      <Col className="copyright">
        &copy; Copyright {new Date().getFullYear()} Travis Prall
      </Col>
    </Row>
  </Container>
);
