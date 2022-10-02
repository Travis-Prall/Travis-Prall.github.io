import React, { Component } from "react";
import { MainNav as Navbar } from "../components";
import { Footer } from "../components";
import { Paths } from "../pages";
import "./app.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: process.env.REACT_APP_PERSON_NAME,
      resumeData: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Paths />
        <Footer />
      </div>
    );
  }
}
