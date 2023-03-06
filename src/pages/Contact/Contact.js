import React from "react";
import style from "./Contact.module.scss";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SERVICE_ID = "service_cjwsair";
const TEMPLATE_ID = "template_rji6qf2";
const PUBLIC_KEY = "cqWoBcQNbiGh9wac";

function About({ contactPage, handleClick }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
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
        <Link onClick={handleClick}>
          <AiOutlineCloseCircle />
        </Link>
        <h1>GET IN TOUCH</h1>
        <form onSubmit={handleOnSubmit} className={style.form}>
          <label>
            Your Email
            <input
              type="email"
              className={style.textInput}
              id="form-input-control-email"
              label="Email"
              name="from_email"
              placeholder="Email…"
              required
            />
          </label>
          <label>
            Your Name
            <input
              type="text"
              className={style.textInput}
              id="form-input-control-last-name"
              label="Name"
              name="from_name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
          </label>
          <label>
            Your Message
            <TextareaAutosize
              minRows={5}
              className={style.textArea}
              id="form-textarea-control-opinion"
              label="Message"
              name="message"
              placeholder="Message…"
              required
            />
          </label>
          <input className={style.submit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default About;
