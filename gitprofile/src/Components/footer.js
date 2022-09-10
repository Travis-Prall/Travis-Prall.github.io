// import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Networks} from './social';

function Footer(props) {
    return (
      <footer>
        <Container fluid>
          <Row className='justify-content-md-center'>
            <Col lg='auto'>
              <Col className='social-links'>{Networks(props.data)}</Col>
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col lg='auto' className='copyright'>
              &copy; Copyright 2022 Travis Prall
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

// function Networks(props) {
//   if (props) {
//     const NetworkArray = props.map((network) => (
//       <li key={network.name} className='mx-4'>
//         <a href={network.url}>
//           <i className={network.className}></i>
//         </a>
//       </li>
//     ));
//     return <Container>{NetworkArray}</Container>;
//   } else {
//     return <Container></Container>;
//   }
// }

export default Footer;
