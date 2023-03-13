import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";
import { imgData } from "./media/imgData";
import style from "./App.module.scss";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [clickedImgDescription, setClickedImgDescription] = useState("");
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleEvent = (e) => {
    setClickedImg(e.target.src);
    setClickedImgDescription(
      imgData.find((img) => img.title === e.target.alt).description
    );
  };

  const dismissImage = () => {
    setClickedImg(null);
  };

  const toggleAbout = () => {
    setAboutPage(!aboutPage);
  };

  const toggleContact = () => {
    setContactPage(!contactPage);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="App" id="app">
      <Navbar
        handleToggleAbout={toggleAbout}
        handleToggleContact={toggleContact}
        handleToggleDropdown={toggleDropdown}
      />
      {dropdown && <Dropdown />}
      <div className={style.container}>
        <About aboutPage={aboutPage} handleClick={toggleAbout} />
        <Contact contactPage={contactPage} handleClick={toggleContact} />
        <div id="carousel">
          <ImageCarousel id="carousel" />
        </div>
        <div id="work">
          <ImageGrid handleClick={handleEvent} />
        </div>
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          clickedImgDescription={clickedImgDescription}
          handleClick={dismissImage}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
