import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);

  const handleEvent = (e) => {
    setClickedImg(e.target.src);
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

  return (
    <div className="App" id="app">
      <Navbar
        handleToggleAbout={toggleAbout}
        handleToggleContact={toggleContact}
      />
      <div className="container" style={{ backgroundColor: "black" }}>
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
        <Modal clickedImg={clickedImg} handleClick={dismissImage} />
      )}
    </div>
  );
}

export default App;
