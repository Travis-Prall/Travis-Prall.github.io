/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

class Header extends Component {
  render() {
    if (this.props.data) {
      var personname = this.props.toplevel.name;
      // var city = this.props.toplevel.city;
      var keywords = this.props.toplevel.keywords.map(function (keyword) {
        return (
              <Badge key={keyword.word} bg='dark' className='m-2'>
                {keyword.word}
              </Badge>
        );
      });
      var networks = this.props.data.social.map(function (network) {
        return (
          <li className='m-3' key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    } else {
      var personname = 'Travis Prall';
    }

    return (
      <header id='home'>
        <Container fluid id='banner'>
          <Row className='justify-content-center'>
            <Col xs={6} className='banner'>
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
                    <ul className='social'>{networks}</ul>
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
