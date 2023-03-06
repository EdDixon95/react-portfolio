import React from "react";
import style from "./Contact.module.scss";
import { Link } from "react-router-dom";

function About({ contactPage, handleClick }) {
  return (
    <div
      className={
        contactPage
          ? style.contactContainerActive
          : style.contactContainerInactive
      }
    >
      <div
        className={contactPage ? style.contactActive : style.contactInactive}
      >
        <Link onClick={handleClick}>X</Link>
        <h1>GET IN TOUCH</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
      </div>
    </div>
  );
}

export default About;
