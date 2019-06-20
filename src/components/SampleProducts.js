import React, { Component } from "react";

import sampleProductStyles from "./sampleProduct.module.scss";

class SampleProduct extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/products")
      .then(res => res.json())
      .then(products =>
        this.setState({ products }, () => console.log("products"))
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
          {this.state.products.map(product => (
            <a className={sampleProductStyles.flexbox} href="/">
              {" "}
              <li className={sampleProductStyles.list} key={product.id}>
                <h2 className={sampleProductStyles.type}>{product.type}</h2>
                <h4 className={sampleProductStyles.slogan}>{product.slogan}</h4>
                <p>{product.color}</p>
                <p>{product.price}</p>

                <button className={sampleProductStyles.button}>
                  <img alt="cart" src="cart.png" />
                </button>
              </li>
            </a>
          ))}
        </ol>
      </div>
    );
  }
}

export default SampleProduct;
