import React, { Component } from 'react';
import Gallery from '../Components/gallery';
import profileData from '../profileData.json';
import Container from 'react-bootstrap/Container';


class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Travis Prall',
      resumeData: profileData,
    };
  }

  render() {
    return (
      <Container fluid>
        <Gallery />
      </Container>
    );
  }
}

export default Art;