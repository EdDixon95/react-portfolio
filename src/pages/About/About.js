import React from "react";
import style from "./About.module.scss";
import milo from "../../media/milo.png";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

function About({ aboutPage, handleClick }) {
  return (
    <div
      className={
        aboutPage ? style.aboutContainerActive : style.aboutContainerInactive
      }
    >
      <div className={aboutPage ? style.aboutActive : style.aboutInactive}>
        <Link onClick={handleClick}>
          <AiOutlineCloseCircle />
        </Link>
        <img src={milo} alt="milo" />
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
