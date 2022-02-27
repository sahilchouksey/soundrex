import {useMediaQuery} from "react-responsive";

import MusicShelfCarouselList from "./Carousel/MusicShelfCarousel";
import Slider from "./Carousel/MusicShelfCarouselSlider";

const MOBILE_WIDTH = 650;

function MusicShelfCarousel({...props}) {
  const renderSlider = useMediaQuery({
    query: `(max-width: ${MOBILE_WIDTH}px)`,
  });

  // conditionally render slider and carousel
  return renderSlider ? (
    <Slider {...props} />
  ) : (
    <MusicShelfCarouselList {...props} />
  );
}

export default MusicShelfCarousel;
