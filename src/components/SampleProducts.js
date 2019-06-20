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
    fetch("/api/products")
      .then(res => res.json())
      .then(products =>
        this.setState({ products }, () => console.log("products"))
      );
  }

  handleClick = id => {
    this.state.getProduct(id);
  };

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
            <li className={sampleProductStyles.flexbox} key={product.id}>
              <h2 className={sampleProductStyles.type}>{product.type}</h2>
              <h4 className={sampleProductStyles.slogan}>{product.slogan}</h4>
              <p>{product.color}</p>
              <p>{product.price}</p>
              <button
                className={sampleProductStyles.button}
                value={product.id}
                onClick={() => {
                  this.handleClick(product.id);
                  window.location = `#/products/${product.id}`;
                }}
              >
                <img alt="cart" src="cart.png" />
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default SampleProduct;
