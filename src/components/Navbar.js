import React from "react";
import style from "./Navbar.module.scss";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.navbarLeft}>Milo Mac</div>
      <div className={style.navbarRight}>
        <ul>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/milo-mcaleny-a2061a262/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
