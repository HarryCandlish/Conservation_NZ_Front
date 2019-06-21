import React from "react";

import navStyles from "./nav.module.scss";

const Header = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <img alt="nav" className={navStyles.image} src="./logo.png" />
            <ul>
              <li>Stats</li>
              <li>Events</li>
              <li>News</li>
              <li>Contact</li>
              <li>Home &nbsp; &nbsp;</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
