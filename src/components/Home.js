import React, { Component } from "react";
import homeStyles from "./home.module.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={homeStyles.title}>Conservation New Zealand</h1>
      </div>
    );
  }
}

export default Home;
