import React, { Component } from 'react';
import Header from '../Components/header';
import About from '../Components/about';
import Resume from '../Components/resume';
import Contact from '../Components/contact';
import Footer from '../Components/footer';
import profileData from '../profileData.json';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Travis Prall',
        resumeData: profileData,
      };
    }

    render() {
      return (
        <div className='App'>
      <Header
        data={this.state.resumeData.main}
        toplevel={this.state.resumeData}
      />
      <About data={this.state.resumeData.main} />
      <Resume data={this.state.resumeData.resume} />
      <Contact data={this.state.resumeData} />
      <Footer data={this.state.resumeData.main} />
        </div>
      );
    }
  }
  
  export default Home;