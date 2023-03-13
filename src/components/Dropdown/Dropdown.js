import React from "react";
import style from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

function Dropdown({
  dropdown,
  handleToggleAbout,
  handleToggleContact,
  handleToggleDropdown,
}) {
  const handleAboutClick = () => {
    handleToggleDropdown();
    handleToggleAbout();
  };
  const handleContactClick = () => {
    handleToggleDropdown();
    handleToggleContact();
  };

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
          <Link onClick={handleAboutClick}>About</Link>
        </li>
        <li>
          <Link onClick={handleContactClick}>Contact</Link>
        </li>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
