import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {ReactSkillBar} from 'react-skillbars';





export function Charts(props) {
    return (
      <footer>
        <Container fluid>
          <Row className='justify-content-md-center'>
            <Col lg='auto'>
              {/* <Col className='social-links'>{Networks(props.data)}</Col> */}
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col lg='auto' className='copyright'>
              &copy; Copyright 2022 Travis Prall
            </Col>
          </Row>
        </Container>
      </footer>
    );
}