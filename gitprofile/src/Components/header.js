/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { Networks } from './social';

class Header extends Component {
  render() {
    var personname = 'Travis Prall';
    if (this.props.data.name) {
      personname = this.props.data.name;
      var keywords = this.props.data.keywords.map(function (keyword) {
        return (
          <Col
            key={keyword.word}
            className='d-flex py-1 justify-content-center'>
            <Badge id='keyword' bg='dark'>
              {keyword.word}
            </Badge>
          </Col>
        );
      });
    }

    return (
      <Container fluid as='header' id='home'>
        <Container fluid id='banner'>
          <Row className='justify-content-center'>
            <Col xs={6} className='banner m-5'>
              <Row>
                <h1>{personname}</h1>
              </Row>
              <Row>{keywords}</Row>
              <Row>{Networks(this.props)}</Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Header;
