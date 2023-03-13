import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

function Navbar({ handleToggleAbout, handleToggleContact }) {
  return (
    <nav className={style.Navbar}>
      <div className={style.navbarLeft}>
        <HashLink smooth to="/#app">
          MILO McALENY
        </HashLink>
      </div>
      <div className={style.navbarRight}>
        <div className={style.largeButtonList}>
          <ul>
            <li>
              <HashLink className={style.largeButtons} smooth to="#work">
                WORK
              </HashLink>
            </li>
            <li>
              <Link className={style.largeButtons} onClick={handleToggleAbout}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className={style.largeButtons}
                onClick={handleToggleContact}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.mobileNavContainer}>
          <Link className={style.smallButton}>
            <FaBars />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
