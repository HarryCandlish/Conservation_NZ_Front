import React, { Component } from "react";

import storeStyles from "./store.module.scss";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      store: []
    };
  }
  componentDidMount() {
    fetch("/api/store")
      .then(res => res.json())
      .then(store => this.setState({ store }, () => console.log("store")));
  }

  handleClick = (e, store) => {
    return (e.target.value = store);
  };

  render() {
    return (
      <div>
        <h1 className={storeStyles.title}>Store</h1>
        <ol className={storeStyles.container}>
          {this.state.store.map(store => (
            <li className={storeStyles.flexbox} key={store.id}>
              <div className={storeStyles.titleBox}>
                <h2 className={storeStyles.type}>{store.type}</h2>
                <h4 className={storeStyles.slogan}>{store.slogan}</h4>
                <p className={storeStyles.storePara}>{store.color}</p>
                <p className={storeStyles.storePara}>{store.price}</p>
              </div>

              <img
                className={storeStyles.image}
                alt="shirt"
                src="./tshirt.jpg"
              />

              <button
                value={store.id}
                onClick={e => {
                  this.handleClick(e, store);
                  window.location = `#/store/${store.id}`;
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

export default Store;
