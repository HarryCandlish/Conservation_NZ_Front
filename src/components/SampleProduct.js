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
            awareness, check out our store.
          </p>
          <a href="/">
            <h1 className={sampleProductStyles.store}>Store</h1>
          </a>
        </div>
        <div>
          <ol className={sampleProductStyles.container}>
            {this.state.sampleProduct.map(sample => (
              <li key={sample.id}>
                <h3>{sample.title}</h3>
                <p>{sample.details}</p>
                <p>{sample.description}</p>
                <img alt="shirt" src={sample.image} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default sampleProduct;
