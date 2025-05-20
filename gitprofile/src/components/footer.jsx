import React, { useState, useEffect, memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Networks } from "./social.jsx";

const FooterComponent = () => {
  const [currentYear, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Set the year only once on component mount
    setYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs only once

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

export const Footer = memo(FooterComponent);
