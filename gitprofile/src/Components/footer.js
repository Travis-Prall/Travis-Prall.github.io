/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <Container>
          <div className='row'>
            <div className='twelve columns'>
              <ul className='social-links'>{networks}</ul>

              <ul className='copyright'>
                <li>&copy; Copyright 2022 Travis Prall</li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
