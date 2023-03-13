import React from "react";
import style from "./Dropdown.module.scss";

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
          <a onClick={handleAboutClick}>About</a>
        </li>
        <li>
          <a onClick={handleContactClick}>Contact</a>
        </li>
        <li>
          <a href="/">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
