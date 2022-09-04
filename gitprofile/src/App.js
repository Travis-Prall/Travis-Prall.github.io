import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import profileData from '../public/profileData.json';


class App extends Component {
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
        <Navbar />
        <Header
          data={this.state.resumeData.main}
          toplevel={this.state.resumeData}
        />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        {/* <Gallery /> */}
        <Contact data={this.state.resumeData} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
