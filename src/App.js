import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import logo from "./logo.svg";
import "./App.css";
import Quill from "./Quill";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Quill React</h1>
        </header>
        <Quill className="App-intro" />
      </div>
    );
  }
}

export default App;
