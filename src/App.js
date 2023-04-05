import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import React, { useState, useEffect } from "react";
import { imgData } from "./media/imgData";
import style from "./App.module.scss";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [clickedImgDescription, setClickedImgDescription] = useState("");
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    document.title = "Milo McPortfolio";
  }, []);

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
    if (contactPage) {
      setContactPage(false);
    }
  };

  const toggleContact = () => {
    setContactPage(!contactPage);
    if (aboutPage) {
      setAboutPage(false);
    }
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toHome = () => {
    setDropdown(false);
    setContactPage(false);
    setAboutPage(false);
    setClickedImg(null);
  };

  return (
    <div className="App" id="app">
      <Navbar
        handleToggleAbout={toggleAbout}
        handleToggleContact={toggleContact}
        handleToggleDropdown={toggleDropdown}
        handleHome={toHome}
      />
      <Dropdown
        dropdown={dropdown}
        handleToggleAbout={toggleAbout}
        handleToggleContact={toggleContact}
        handleToggleDropdown={toggleDropdown}
      />
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
