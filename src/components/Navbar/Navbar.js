import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";

function Navbar({ handleToggleAbout, handleToggleContact }) {
  return (
    <nav className={style.Navbar}>
      <div className={style.navbarLeft}>
        <HashLink smooth to="/#app">
          MILO McALENY
        </HashLink>
      </div>
      <div className={style.navbarRight}>
        <ul>
          <li>
            <HashLink smooth to="#work">
              WORK
            </HashLink>
          </li>
          <li>
            <Link onClick={handleToggleAbout}>ABOUT</Link>
          </li>
          <li>
            <Link onClick={handleToggleContact}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
