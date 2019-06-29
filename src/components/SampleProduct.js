import React, { Component } from "react";

import sampleProductStyles from "./sampleProduct.module.scss";

class sampleProduct extends Component {
  constructor() {
    super();
    this.state = {
      sampleProduct: []
    };
  }

  componentDidMount() {
    fetch("/api/sampleproduct")
      .then(res => res.json())
      .then(sampleProduct =>
        this.setState({ sampleProduct }, () => console.log("sampleProduct"))
      );
  }

  render() {
    return (
      <div className={sampleProductStyles.header}>
        <div className={sampleProductStyles.banner}>
          <h2 className={sampleProductStyles.title}>Our Product</h2>
          <p className={sampleProductStyles.epigraph}>
            A clothing line that distributes clothing promoting mental health
            awareness, check out our store. Everything in our store is produced
            locally. The Shirts are made with reused fabric and are
            environmentally friendly. On each item of clothing there appears our
            slogan promoting well-being and the conception of overcoming.
          </p>
          <a href="/">
            <h1 className={sampleProductStyles.store}>Store</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default sampleProduct;
