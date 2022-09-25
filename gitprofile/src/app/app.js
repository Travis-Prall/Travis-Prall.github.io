import React, { Component } from "react";
import { MainNav as Navbar } from "../components";
import { Footer } from "../components";
import { Paths } from "../pages";
import profileData from "../profileData.json";
import ReactGA from "react-ga";
import "./app.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: process.env.REACT_APP_PERSON_NAME,
      resumeData: [],
    };
  }

  componentDidMount() {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE);
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.setState({ resumeData: profileData });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Paths {...this.state.resumeData} />
        <Footer />
      </div>
    );
  }
}
