import React, { Component } from "react";
import homeStyles from "./home.module.scss";

import Chart from "./Chart";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      stats: []
    };
  }

  componentDidMount() {
    fetch("/api/stats")
      .then(res => res.json())
      .then(stats => this.setState({ stats }, () => console.log("stats")));
  }
  render() {
    return (
      <div>
        <h1 className={homeStyles.title}>
          Wellington Mental Health Association
        </h1>
        <p className={homeStyles.epigraph}>
          An attempt to fight and establish a base in Wellington to deal with
          the mental health issues in Wellington and New Zealand
        </p>
        <div>
          <h2 className={homeStyles.secondaryTitle}>The Problem</h2>
          <ol className={homeStyles.container}>
            {this.state.stats.map(stat => (
              <li className={homeStyles.flexbox} key={stat.id}>
                <h2 className={homeStyles.type}>{stat.type}</h2>
                <Chart />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
