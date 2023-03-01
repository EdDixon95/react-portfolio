import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";

function App() {
  const [clickedImg, setClickedImg] = useState(null);

  const handleEvent = (e) => {
    setClickedImg(e.target.src);
  };

  const dismiss = () => {
    setClickedImg(null);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container" style={{ backgroundColor: "black" }}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <div id="carousel">
          <ImageCarousel id="carousel" />
        </div>
        <div id="work">
          <ImageGrid handleClick={handleEvent} />
        </div>
      </div>
      {clickedImg && <Modal clickedImg={clickedImg} handleClick={dismiss} />}
    </div>
  );
}

export default App;
