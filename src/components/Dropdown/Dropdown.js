import React from "react";
import style from "./Dropdown.module.scss";

function Dropdown() {
  return (
    <div className={style.dropdown}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
