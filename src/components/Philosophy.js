import React, { Component } from "react";

import philosophyStyles from "./philosophy.module.scss";

class Philosophy extends Component {
  render() {
    return (
      <div>
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
