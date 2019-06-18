import React from "react";

import navStyles from "./nav.module.scss";

const Header = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <img alt="nav" className={navStyles.image} src="./nav.png" />
            <ul>
              <li>
                <a to="/animals">Animals</a>
              </li>
              <li>
                <a to="/events">Events </a>
              </li>
              <li>
                <a to="/news">News </a>
              </li>
              <li>
                <a to="/contact">Contact </a>
              </li>
              <li>
                <a to="/">Home &nbsp; &nbsp; </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
