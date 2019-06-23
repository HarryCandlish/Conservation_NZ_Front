import React, { Component } from "react";

import productsStyles from "./products.module.scss";

class Products extends Component {
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

  handleClick = (e, product) => {
    return (e.target.value = product);
  };

  render() {
    return (
      <div>
        <h1 className={productsStyles.title}>Products</h1>
        <ol className={productsStyles.container}>
          {this.state.products.map(product => (
            <li className={productsStyles.flexbox} key={product.id}>
              <h2 className={productsStyles.type}>{product.type}</h2>
              <h4 className={productsStyles.slogan}>{product.slogan}</h4>
              <p>{product.color}</p>
              <p>{product.price}</p>
              <button
                value={product.id}
                onClick={e => {
                  this.handleClick(e, product);
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

export default Products;
