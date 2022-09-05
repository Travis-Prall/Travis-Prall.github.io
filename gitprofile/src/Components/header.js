/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.toplevel.name;
      // var city = this.props.toplevel.city;
      var keywords = this.props.toplevel.keywords.map(function (keyword) {
        return (
          <li key={keyword.word} className='keyword'>
            <h4>
              <Badge bg='dark' className='keywordButton'>
                {keyword.word}
              </Badge>
            </h4>
          </li>
        );
      });
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    } else {
      var name = 'Travis Prall';
    }

    return (
      <header id='home'>
        <Container fluid id='banner'>
          <Row className='justify-content-center'>
            <Col sm={6}>
              <Container className='banner'>
                <Row className='justify-content-center'>
                  <Col md='auto' className='banner-text'>
                    <Row className='justify-content-center'>
                      <Col xs='auto'>
                        <h1>{name}</h1>
                      </Col>
                    </Row>
                    <Row className='justify-content-center'>
                      <Col xs='auto'>
                        <ul className='keywords'>{keywords}</ul>
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
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
