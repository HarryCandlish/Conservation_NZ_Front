import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Events from "./components/Events";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
        </Router>
      </div>
    );
  }
}

export default App;
