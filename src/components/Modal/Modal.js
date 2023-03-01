import style from "./Modal.module.scss";

const Modal = ({ clickedImg, handleClick }) => {
  return (
    <div id="modal-div" className={style.modaldiv} onClick={handleClick}>
      <div className={style.modal}>
        <img src={clickedImg} alt="larger-img" className={style.img}></img>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
      </div>
    </div>
  );
};

export default Modal;
