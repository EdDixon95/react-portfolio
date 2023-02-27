import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={style.Navbar}>
      <div className={style.navbarLeft}>
        <Link to="/Home">MILO MCALENY</Link>
      </div>
      <div className={style.navbarRight}>
        <ul>
          <li>
            <Link to="/work">WORK</Link>
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
