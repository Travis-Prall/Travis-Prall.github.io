import React, { Component } from 'react';
import Gallery from '../Components/gallery';
import Container from 'react-bootstrap/Container';

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
