import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Paths from './pages/paths';
import profileData from './profileData.json';
import ReactGA from 'react-ga';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Travis Prall',
      resumeData: {},
      // resumeData: profileData,
    };
  }

  componentDidMount() {
    ReactGA.initialize('UA-209754722-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.setState({ resumeData: profileData });
    // console.log(this.state.resumeData);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Paths resumeData={this.state.resumeData} />
        <Footer data={this.state.resumeData} />
      </div>
    );
  }
}

export default App;
