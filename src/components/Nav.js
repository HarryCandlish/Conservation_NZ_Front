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
                <a to="/">Animals</a>
              </li>
              <li>
                <a to="/">Events </a>
              </li>
              <li>
                <a to="/">News </a>
              </li>
              <li>
                <a to="/">Contact </a>
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
