import React, { Component } from "react";
import homeStyles from "./home.module.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={homeStyles.title}>
          Wellington Environmental Association
        </h1>
        <p className={homeStyles.epigraph}>
          an open source website cultivating awareness for protecting our local
          environment and the species within it
        </p>
        <div>
          <ol className={homeStyles.container}>
            <li className={homeStyles.flexbox}>
              <h2>Animals</h2>
            </li>
            <li className={homeStyles.flexbox}>
              <h2>News</h2>
            </li>
            <li className={homeStyles.flexbox}>
              <h2>Events</h2>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
