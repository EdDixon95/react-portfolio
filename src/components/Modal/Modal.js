import style from "./Modal.module.scss";

const Modal = ({ clickedImg, clickedImgDescription, handleClick }) => {
  return (
    <div id="modal-div" className={style.modaldiv} onClick={handleClick}>
      <div className={style.modal}>
        <img src={clickedImg} alt="larger-img" className={style.img}></img>
        <p>{clickedImgDescription}</p>
      </div>
    </div>
  );
};

export default Modal;
