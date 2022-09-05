import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Paths from "./pages/paths";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Paths />
      </div>
    );
  }
}

export default App;
