import React, { Component } from 'react';
import Gallery from './gallery';
import Container from 'react-bootstrap/Container';
import './art.scss';

class Art extends Component {
  render() {
    return (
      <Container fluid>
        <Gallery resumeData={this.props.resumeData} />
      </Container>
    );
  }
}

export default Art;
