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
      <section id='contact'>
        <Container fluid>
          <Row className='justify-content-md-center'>
            <Col lg={6} className='myinfo'>
              <h1>Contact</h1>
              <h4>{name}</h4>
              <p>
                {city},{state}
              </p>
            </Col>
            <Col lg='auto' className='contactbuttons'>
              <a href={'mailto:' + email}>
                <Button variant='dark' size='lg'>
                  Email Me
                </Button>
              </a>
              <a href='https://freesuggestionbox.com/pub/gjrttsx'>
                <Button variant='dark' size='lg'>
                  FeedBack
                </Button>
              </a>
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
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Contact;
