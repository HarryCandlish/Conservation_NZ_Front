import React, { Component } from "react";

import sampleProductStyles from "./sampleProduct.module.scss";

class sampleProduct extends Component {
  render() {
    return (
      <div>
        <div className={sampleProductStyles.banner}>
          <h2 className={sampleProductStyles.title}>Our Product</h2>
          <p className={sampleProductStyles.epigraph}>
            A clothing line that distributes clothing promoting mental health
            awareness
          </p>
        </div>
      </div>
    );
  }
}

export default sampleProduct;
