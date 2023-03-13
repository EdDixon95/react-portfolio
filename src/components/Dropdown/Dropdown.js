import React from "react";
import style from "./Dropdown.module.scss";

function Dropdown({ dropdown }) {
  return (
    <div
      className={
        dropdown
          ? `${style.dropdown} ${style.active}`
          : `${style.dropdown} ${style.inactive}`
      }
    >
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
