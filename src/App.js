import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ImageCarousel from "./components/Carousel/Carousel";
import ImageGrid from "./components/ImageGrid/ImageGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" style={{ backgroundColor: "black" }}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <ImageCarousel />
        <div id="work">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
