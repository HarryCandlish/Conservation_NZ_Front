import React, { Component } from "react";

import navStyles from "./nav.module.scss";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <h4 className={navStyles.title}>All is Well.</h4>
          </div>
          <ul className={navStyles.navLinks}>
            <a href="#/store">
              <li>
                <h4>Store</h4>
              </li>
            </a>
            <a href="#/events">
              <li>
                {" "}
                <h4>Events</h4>
              </li>
            </a>

            <a href="#/news">
              <li>
                {" "}
                <h4>News</h4>
              </li>
            </a>
            <a href="/">
              <li>
                {" "}
                <h4>Home</h4>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
