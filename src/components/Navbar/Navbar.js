import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className={style.Navbar}>
      <div className={style.navbarLeft}>
        <HashLink smooth to="/pathLink#carousel">
          MILO MCALENY
        </HashLink>
      </div>
      <div className={style.navbarRight}>
        <ul>
          <li>
            <HashLink smooth to="/pathLink#work">
              WORK
            </HashLink>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
