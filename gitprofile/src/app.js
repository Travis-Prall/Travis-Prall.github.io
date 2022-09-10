import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Paths from "./pages/paths";
import profileData from './profileData.json';



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
        <Paths resumeData={this.state.resumeData} />
        <Footer data={this.state.resumeData.main.social} />
      </div>
    );
  }
}

export default App;
