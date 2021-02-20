import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require("../images/landing-page-images/buffet1.jpg"),
    altText: '',
    caption: 'Sweet Special'
  },
  {
    src: require("../images/landing-page-images/image 2.png"),
    altText: 'buffet 2',
    caption: 'buffet 2'
  },
  {
    src: require("../images/landing-page-images/buffet3.jpg"),
    altText: 'buffet 3',
    caption: 'buffet 3'
  },
  {
    src: require("../images/landing-page-images/buffet4.jpg"),
    altText: 'buffet 4',
    caption: 'buffet 4'
  },
  {
    src: require("../images/landing-page-images/buffet5.jpg"),
    altText: 'buffet 5',
    caption: 'buffet 5'
  }
];

const ShowCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="550" width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ShowCarousel;