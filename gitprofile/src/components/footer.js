import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Networks } from "./social";

export const Footer = () => {
  const [currentYear, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const Year = new Date().getFullYear();
    setYear(Year);
  }, [currentYear]);
  return (
    <Container fluid as="footer">
      <Row>
        <Networks />
      </Row>
      <Row className="justify-content-md-center">
        <Col className="copyright">
          &copy; Copyright {currentYear && currentYear} Travis Prall
        </Col>
      </Row>
    </Container>
  );
};
