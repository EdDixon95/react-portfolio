import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [aboutPage, setAboutPage] = useState(false);

  const handleEvent = (e) => {
    setClickedImg(e.target.src);
  };

  const dismissImage = () => {
    setClickedImg(null);
  };

  const openAbout = () => {
    setAboutPage(!aboutPage);
  };

  return (
    <div className="App" id="app">
      <Navbar handleClick={openAbout} />
      <div className="container" style={{ backgroundColor: "black" }}>
        <About aboutPage={aboutPage} handleClick={openAbout} />
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
