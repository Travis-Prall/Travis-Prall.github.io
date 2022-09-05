import React, { Component } from 'react';
import Gallery from '../Components/gallery';
import Decor from '../Components/decor';
import Container from 'react-bootstrap/Container';


class Art extends Component {
  render() {
    return (
      <Container fluid>
        <Gallery />
        <Decor />
      </Container>
    );
  }
}

export default Art;