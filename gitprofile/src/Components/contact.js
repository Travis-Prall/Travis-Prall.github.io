import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var state = this.props.data.state;
      var city = this.props.data.city;
      var email = this.props.data.email;
    }

    return (
      <section id='contact' className='m-4'>
        <Container fluid>
          <Row className='justify-content-center'>
            <Col className='myinfo'>
              <h1>Contact</h1>
              <h4>{name}</h4>
              <h5>{city}, {state}</h5>
            </Col>
            <Col className='contactbuttons'>
              <a href={'mailto:' + email}>
                <Button variant='dark' size='lg'>
                  Email Me
                </Button>
              </a></Col>
              <Col className='contactbuttons'>
              <a
                href='https://www.buymeacoffee.com/travisprall'
                target='_blank'>
                <img
                  src='https://cdn.buymeacoffee.com/buttons/v2/default-red.png'
                  alt='Buy Me A Coffee'
                  style={{
                    height: '60px',
                    width: '217px',
                  }}></img>
              </a></Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Contact;
