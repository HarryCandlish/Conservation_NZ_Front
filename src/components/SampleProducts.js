import React, { Component } from "react";

import sampleProductStyles from "./sampleProduct.module.scss";

class SampleProduct extends Component {
  constructor() {
    super();
    this.state = {
      tshirts: []
    };
  }

  componentDidMount() {
    fetch("/api/tshirts")
      .then(res => res.json())
      .then(tshirts =>
        this.setState({ tshirts }, () => console.log("tshirts"))
      );
  }
  render() {
    return (
      <div>
        <h2 className={sampleProductStyles.title}>Our Mission</h2>
        <p className={sampleProductStyles.epigraph}>
          To provide and spread awareness in the community
        </p>
        <a href="/">
          <h2 className={sampleProductStyles.secondTitle}>The Store</h2>
        </a>
        <ol className={sampleProductStyles.container}>
          {this.state.tshirts.map(tshirt => (
            <li className={sampleProductStyles.flexbox} key={tshirt.id}>
              <h2>{tshirt.type}</h2>
              <p>{tshirt.slogan}</p>
              <p>{tshirt.price}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default SampleProduct;
