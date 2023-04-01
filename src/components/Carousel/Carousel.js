import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import fish from "../../media/images/fish.jpeg";
import eyes from "../../media/images/eyes.jpg";
import style from "./Carousel.module.scss";
import hornedMan from "../../media/images/hornedMan.jpg";

function ImageCarousel() {
  return (
    <Carousel
      className={style.Carousel}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      stopOnHover={false}
    >
      <div>
        <img src={eyes} alt="eyes" />
      </div>
      <div>
        <img src={fish} alt="fish" />
      </div>
      <div>
        <img src={hornedMan} alt="hornedMan" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
