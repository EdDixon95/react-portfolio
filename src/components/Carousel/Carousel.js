import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Fish from "../../media/Fish.png";

function ImageCarousel() {
  return (
    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
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
