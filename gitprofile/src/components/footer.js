import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Networks } from "./social";

export const Footer = (resumeData) => (
  <Container fluid as="footer">
    <Row>{Networks(resumeData)}</Row>
    <Row className="justify-content-md-center">
      <Col className="copyright">
        &copy; Copyright {new Date().getFullYear()} Travis Prall
      </Col>
    </Row>
  </Container>
);
