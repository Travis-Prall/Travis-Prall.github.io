/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import {Networks} from './social';

class Header extends Component {
  
  render() {
    if (this.props.data) {
      var personname = this.props.data.name;
      var keywords = this.props.data.keywords.map(function (keyword) {
        return (
              <Badge key={keyword.word} bg='dark' className='m-2'>
                {keyword.word}
              </Badge>
        );
      });
    } else {
      var personname = 'Travis Prall';
    }

    return (
      <header id='home'>
        <Container fluid id='banner'>
          <Row className='justify-content-center'>
            <Col xs={6} className='banner m-5'>
                <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <h1>{personname}</h1>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs='auto' id='keyword'>
                    {keywords}
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <Col className='social'>{Networks(this.props.data.main.social)}</Col>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
