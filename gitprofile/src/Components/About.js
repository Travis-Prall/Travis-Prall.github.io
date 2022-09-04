/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
    } else {
      var bio = (
        <Placeholder as='p' animation='glow'>
          <Placeholder xs={11} />
          <Placeholder xs={6} /> <Placeholder xs={2} /> <Placeholder xs={3} />
          <Placeholder xs={11} />
          <Placeholder xs={11} />
          <Placeholder xs={11} />
          <Placeholder xs={6} /> <Placeholder xs={2} />
        </Placeholder>
      );
    }

    return (
      <section id='about'>
        <Container fluid>
          <Row className='justify-content-center'>
            <Col lg={3}>
              <Image
                src='/images/profile_image.jpg'
                className='profile-pic'
                alt='Travis Prall Profile Pic'
                fluid
              />
            </Col>
            <Col lg={9} className='bio'>
              <h2>About Me</h2>
              <Row>
                <Col>
                  <p>{bio}</p>
                </Col>
              </Row>
              {/* <Row className='justify-content-end'>
                <Col>
                  <a href='/forms/Travis_Prall_Resume_IT.pdf' download>
                    <Button variant='dark' size='sm'>
                      DownLoad Resume
                    </Button>
                  </a>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
