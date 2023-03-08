import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <p>
        Created by
        <a href="https://github.com/EdDixon95"> Ed Dixon</a>
      </p>
    </div>
  );
}

export default Footer;
