import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Animals from "./components/Animals";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Animals} />
        </Router>
      </div>
    );
  }
}

export default App;
