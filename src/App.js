import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ImageCarousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ImageCarousel />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
