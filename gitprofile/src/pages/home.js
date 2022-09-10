import React, { Component } from 'react';
import Header from '../Components/header';
import About from '../Components/about';
import Resume from '../Components/resume';

class Home extends Component {
    render() {
      return (
      <>
        <Header
          data={this.props.resumeData}
        />
        <About resumeData={this.props.resumeData} />
        <Resume resumeData={this.props.resumeData.resume} />
      </>
      );
    }
  }
  
  export default Home;