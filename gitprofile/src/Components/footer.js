// import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Networks } from './social';

function Footer(props) {
  let year = Date().getFullYear;
  return (
    <Container fluid as='footer'>
      <Row className='justify-content-md-center'>
        <Col lg='auto'>
          <Col className='social-links'>{Networks(props.data)}</Col>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col lg='auto' className='copyright'>
          &copy; Copyright {year} Travis Prall
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
