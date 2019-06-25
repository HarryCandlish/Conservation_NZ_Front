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
            To provide and spread awareness in the community
          </p>
        </div>
        <div className={philosophyStyles.container}>
          <div>
            <img
              className={philosophyStyles.image}
              alt="woods"
              src="/background.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Philosophy;
