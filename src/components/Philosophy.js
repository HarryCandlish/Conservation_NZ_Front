import React, { Component } from "react";

import philosophyStyles from "./philosophy.module.scss";

class Philosophy extends Component {
  constructor() {
    super();
    this.state = {
      philosophy: []
    };
  }
  componentDidMount() {
    fetch("/api/philosophy")
      .then(res => res.json())
      .then(philosophy =>
        this.setState({ philosophy }, () => console.log("philosophy"))
      );
  }
  render() {
    return (
      <div className={philosophyStyles.mainContainer}>
        <div className={philosophyStyles.banner}>
          <h2 className={philosophyStyles.title}>Our Philosophy</h2>
          <p className={philosophyStyles.epigraph}>
            We believe that every company, to continue to move forward, must
            have a philosophy. Our philosophy promotes the dignity and courage
            it takes to fight mental illness. It's the belief that life will be
            better and that this is a fight we are able to win.
          </p>
        </div>
        <div className={philosophyStyles.containerTwo}>
          <ul className={philosophyStyles.container}>
            {this.state.philosophy.map(philosophy => (
              <li className={philosophyStyles.flexbox} key={philosophy.id}>
                <div className={philosophyStyles.titleDiv}>
                  <h2 className={philosophyStyles.flexTitle}>
                    {philosophy.title}
                  </h2>
                </div>
                <p className={philosophyStyles.flexPara}>
                  {philosophy.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Philosophy;
