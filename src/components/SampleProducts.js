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
        <div className={sampleProductStyles.banner}>
          <h2 className={sampleProductStyles.title}>Our Mission</h2>
          <p className={sampleProductStyles.epigraph}>
            To provide and spread awareness in the community
          </p>
        </div>
        <a href="/">
          <h2 className={sampleProductStyles.secondTitle}>The Store</h2>
        </a>
        <ol className={sampleProductStyles.container}>
          {this.state.tshirts.map(tshirt => (
            <a className={sampleProductStyles.flexbox} href="/">
              {" "}
              <li className={sampleProductStyles.list} key={tshirt.id}>
                <h2 className={sampleProductStyles.type}>{tshirt.type}</h2>
                <h4 className={sampleProductStyles.slogan}>{tshirt.slogan}</h4>
                <p>{tshirt.price}</p>
                <p>Sizes : {tshirt.size}</p>
              </li>
            </a>
          ))}
        </ol>
      </div>
    );
  }
}

export default SampleProduct;
