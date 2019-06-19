import React, { Component } from "react";
import homeStyles from "./home.module.scss";

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
          Wellington Environmental Association
        </h1>
        <p className={homeStyles.epigraph}>
          an open source website cultivating awareness for protecting our local
          environment and the species within it
        </p>
        <div>
          <ol className={homeStyles.container}>
            {this.state.stats.map(stat => (
              <li className={homeStyles.flexbox} key={stat.id}>
                <h2 className={homeStyles.type}>{stat.type}</h2>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
