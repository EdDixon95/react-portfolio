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
    console.log(e.target.src);
    setClickedImg(e.target.src);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container" style={{ backgroundColor: "black" }}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <ImageCarousel />
        <div id="work">
          <ImageGrid handleClick={handleEvent} />
        </div>
      </div>
      {clickedImg && <Modal clickedImg={clickedImg} />}
    </div>
  );
}

export default App;
