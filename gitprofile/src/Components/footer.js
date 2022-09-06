import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name} className='mx-4'>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <Container fluid>
          <Row className='justify-content-md-center'>
            <Col lg='auto'>
              <Col className='social-links'>{networks}</Col>
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
}

export default Footer;
