import React from "react";
import style from "./About.module.scss";
import milo from "../../media/images/milo.png";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

function About({ aboutPage, handleClick }) {
  return (
    <div
      className={
        aboutPage ? style.aboutContainerActive : style.aboutContainerInactive
      }
    >
      <div className={aboutPage ? style.aboutActive : style.aboutInactive}>
        <Link onClick={handleClick}>
          <CgClose />
        </Link>
        <img src={milo} alt="milo" />
        <p>
          "I am an experienced videographer, photographer, graphic designer &
          illustrator. I have worked to create content for a wide range of
          brands, always with fresh, professional and imaginative designs."
        </p>
      </div>
    </div>
  );
}

export default About;
