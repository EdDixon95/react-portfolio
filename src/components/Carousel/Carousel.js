import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Fish from "../../media/Fish.png";
import style from "./Carousel.module.scss";

function ImageCarousel() {
  return (
    <Carousel
      className={style.Carousel}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      <div>
        <img src={Fish} alt="Fish" />
      </div>
      <div>
        <img src={Fish} alt="Fish" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
